import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { LOGIN } from '../../constants/routes';
import { User } from 'src/app/_components/profile/interfaces';

export interface Response {
  accessToken: string;
}

const ACCESS_TOKEN = 'accessToken';
const USER = 'user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public accessToken$: BehaviorSubject<string>;
  public user$: BehaviorSubject<User>;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    const user = JSON.parse(localStorage.getItem(USER));

    this.accessToken$ = new BehaviorSubject<string>(accessToken);
    this.user$ = new BehaviorSubject<User>(user);
  }

  get accessToken() {
    return this.accessToken$.value;
  }

  get user() {
    return this.user$.value;
  }

  getUserProfile(email) {
    const getUser$ = this.http.get<User[]>(`/users?email=${email}`);

    getUser$.subscribe((res) => {
      const user = res[0];

      this.user$.next(user);
      localStorage.setItem(USER, JSON.stringify(user));
    });
  }

  login({email, password}) {
    const url = '/login';

    const response$ = this.http.post<Response>(url, {email, password});

    response$.subscribe(res => {
      this.accessToken$.next(res.accessToken);
      localStorage.setItem(ACCESS_TOKEN, res.accessToken);

      this.getUserProfile(email);

      this.router.navigate(['/']);
    });
  }

  registration(fromData) {
    const url = '/register';

    const response$ = this.http.post<any>(url, JSON.stringify(fromData));

    response$.subscribe(res => {
      this.accessToken$.next(res);

      localStorage.setItem(ACCESS_TOKEN, res.accessToken);

      this.getUserProfile(fromData.email);

      this.router.navigate(['/']);
    });
  }

  logout() {
    this.accessToken$.next('');
    localStorage.removeItem(ACCESS_TOKEN);
    this.router.navigate([LOGIN]);
  }

  editProfile(fromData) {
    const url = `/users/${this.user.id}`;

    const subscription$ = this.http.patch<User>(url, JSON.stringify(fromData));

    subscription$.subscribe((user) => {
      this.user$.next(user);
      localStorage.setItem(USER, JSON.stringify(user));
    });
  }
}
