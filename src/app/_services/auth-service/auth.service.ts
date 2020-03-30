import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { LOGIN } from '../../constants/routes';

export interface Response {
  accessToken: string;
}

const ACCESS_TOKEN = 'accessToken';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public accessToken$: BehaviorSubject<string>;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);

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
      localStorage.setItem(ACCESS_TOKEN, res.accessToken);

      this.router.navigate(['/']);
    });
  }

  registration({email, password}) {
    const url = '/register';

    const response$ = this.http.post<any>(url, JSON.stringify({email, password}));

    response$.subscribe(res => {
      this.accessToken$.next(res);

      localStorage.setItem(ACCESS_TOKEN, res.accessToken);
      this.router.navigate(['/']);
    });
  }

  logout() {
    this.accessToken$.next('');
    localStorage.removeItem(ACCESS_TOKEN);
    this.router.navigate([LOGIN]);
  }
}
