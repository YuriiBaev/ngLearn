import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

import { User } from '@components/profile/interfaces';
import { FormsValidationService } from '@services/forms-validation/forms-validation.service';

import { LOGIN_ROUTE, PROFILE } from '../../constants/routes';

export interface Response {
  accessToken: string;
}

const ACCESS_TOKEN = 'accessToken';
const USER = 'user';
const defaultAvatar = 'assets/image/img_avatar.png';

const DEFAULT_USER = {
  avatar: '', name: '', surname: '', email: '', gender: ''
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public accessToken$: BehaviorSubject<string>;
  public user$: BehaviorSubject<User>;

  constructor(
    private http: HttpClient,
    private router: Router,
    private formValidation: FormsValidationService,
  ) {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    const user = JSON.parse(localStorage.getItem(USER));

    this.accessToken$ = new BehaviorSubject<string>(accessToken);
    this.user$ = new BehaviorSubject<User>(user || DEFAULT_USER);
  }

  get accessToken() {
    return this.accessToken$.value;
  }

  get user() {
    return this.user$.value;
  }

  get userId() {
    return this.user && this.user.id;
  }

  getUserProfile(email) {
    const getUser$ = this.http.get<User[]>(`/users?email=${email}`);

    getUser$.subscribe(([user]) => {
      if (!user) { return; }
      const processedUser = {...user, avatar: user.avatar || defaultAvatar};

      this.user$.next(processedUser);
      localStorage.setItem(USER, JSON.stringify(processedUser));
    });
  }

  login({email, password}) {
    const url = '/login';

    const response$ = this.http.post<Response>(url, {email, password});

    response$.subscribe(
      res => {
        this.accessToken$.next(res.accessToken);
        localStorage.setItem(ACCESS_TOKEN, res.accessToken);

        this.getUserProfile(email);

        this.router.navigate(['/']);
      },
      this.formValidation.catchFormErrors
    );
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
    localStorage.removeItem(USER);
    this.router.navigate([LOGIN_ROUTE]);
  }

  editProfile(fromData) {
    const url = `/users/${this.user.id}`;

    const subscription$ = this.http.patch<User>(url, JSON.stringify(fromData));

    subscription$.subscribe((user) => {
      const processedUser = {...user, avatar: user.avatar || defaultAvatar};

      this.user$.next(processedUser);
      localStorage.setItem(USER, JSON.stringify(processedUser));
      this.router.navigate([PROFILE]);
    });
  }
}
