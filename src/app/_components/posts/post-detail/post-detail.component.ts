import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostsService } from '@services/posts/posts.service';
import { Post } from '../interfaces';
import { DEFAULT_POST } from '../constants';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
})
export class PostDetailComponent implements OnInit, OnDestroy {
  public post: Post = DEFAULT_POST;

  constructor(
    private postsService: PostsService,
    private router: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.postsService.getPostDetail(params.get('id'));
    });

    this.postsService.postSubject$.subscribe(post => {
      this.post = post;
    });
  }

  ngOnDestroy(): void {
    this.postsService.postSubject$.unsubscribe();
  }

}
