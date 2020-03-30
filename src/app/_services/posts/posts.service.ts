import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, concat, Observable, Subscription, throwError } from 'rxjs';
import { catchError, map, subscribeOn, switchMap } from 'rxjs/operators';
import { Post } from '../../_components/posts/interfaces';

interface Response {
  data: any;
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private postsSubject$: BehaviorSubject<Post[]>;
  public readonly posts$: Observable<Post[]>;

  constructor(
    private http: HttpClient
  ) {
    this.postsSubject$ = new BehaviorSubject<Post[]>([]);
    this.posts$ = this.postsSubject$.asObservable();
  }

  postsRequest() {
    const url = '/posts';

    return this.http.get<Post[]>(url);
  }

  getPosts() {
    this.postsRequest().subscribe(res => {
      this.postsSubject$.next(res);
    });
  }

  addPost(formData) {
    const url = '/posts';

    const data = {
      ...formData,
      date: new Date().toISOString()
    };

    const postData$ = this.http.post<Response>(url, data).pipe(
      switchMap(() => this.postsRequest())
    );

    postData$.subscribe(res => {
      this.postsSubject$.next(res);
    });
  }
}
// combineLatest for parallel requests
// const a = combineLatest(
//   request1,
//   request2,
// ).subscribe((reqThatFirsFinished, second) => {})
