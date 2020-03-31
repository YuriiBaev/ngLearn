import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Post } from '../../_components/posts/interfaces';

interface Response {
  data: any;
}

interface PostsParams {
  [userId: string]: string;
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

  postsRequest(params?: PostsParams) {
    const url = '/posts';

    return this.http.get<Post[]>(url, { params });
  }

  getPosts(params?: PostsParams) {
    this.postsRequest(params).subscribe(res => {
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
