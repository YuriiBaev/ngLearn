import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { PostsService } from '@services/posts/posts.service';
import { AuthService } from '@services/auth-service/auth.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
  @Input() ownPosts = false;

  constructor(
    private postsService: PostsService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    const params = this.ownPosts
      ? {userId: String(this.authService.user.id)}
      : null;

    this.postsService.getPosts(params);
  }

  ngOnDestroy(): void {
    this.postsService.resetPostsSubjects();
  }

  trackByFn(index, item) {
    return item.id;
  }
}
