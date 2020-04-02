import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Post } from '@components/posts/interfaces';
import { Router } from '@angular/router';

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
  public postSubject$: BehaviorSubject<Post>;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.postsSubject$ = new BehaviorSubject<Post[]>([]);
    this.postSubject$ = new BehaviorSubject<Post>(null);
  }

  get posts() {
    return this.postsSubject$.value;
  }

  get post() {
    return this.postSubject$.value;
  }

  postsRequest(params?: PostsParams) {
    const url = '/posts';

    return this.http.get<Post[]>(url, { params });
  }

  postsDetailRequest(id: string) {
    const url = `/posts/${id}`;

    return this.http.get<Post>(url);
  }

  getPosts(params?: PostsParams) {
    this.postsRequest(params).subscribe(res => {
      this.postsSubject$.next(res);
    });
  }

  getPostDetail(id: string) {
    this.postsDetailRequest(id).subscribe(res => {
      this.postSubject$.next(res);
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
      this.router.navigate(['/']);
    });
  }

  updatePost(formData, id) {
    const url = `/posts/${id}`;

    const data = {
      ...formData,
      date: new Date().toISOString()
    };

    const postData$ = this.http.patch<Response>(url, data).pipe(
      switchMap(() => this.postsRequest())
    );

    postData$.subscribe(res => {
      this.postsSubject$.next(res);
      this.router.navigate(['/']);
    });
  }

  deletePost(postId: number) {
    const url = `/posts/${postId}`;

    const postData$ = this.http.delete<Response>(url).pipe(
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
