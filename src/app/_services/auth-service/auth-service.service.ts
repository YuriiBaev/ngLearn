import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

export interface Response {
  accessToken: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  public accessToken$: BehaviorSubject<string>;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    const accessToken = localStorage.getItem('accessToken');

    this.accessToken$ = new BehaviorSubject<string>(accessToken);
  }

  get accessToken() {
    return this.accessToken$.value;
  }

  login({email, password}) {
    const url = '/login';

    const response$ = this.http.post<Response>(url, {email, password});

    response$.subscribe(res => {
      this.accessToken$.next(res.accessToken);
      localStorage.setItem('accessToken', res.accessToken);

      this.router.navigate(['/']);
    });
  }

  registration({email, password}) {
    const url = '/register';

    const response$ = this.http.post<any>(url, JSON.stringify({email, password}));

    response$.subscribe(res => {
      this.accessToken$.next(res);

      localStorage.setItem('accessToken', res.accessToken);
      this.router.navigate(['/']);
    });
  }
}
