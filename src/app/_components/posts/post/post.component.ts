import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@services/auth-service/auth.service';
import { PostsService } from '@services/posts/posts.service';

import { Post } from '../interfaces';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() post: Post;
  @Input() additionalClass = '';
  @Input() detail = false;

  constructor(
    private postsService: PostsService,
    private authService: AuthService,
    private router: Router,
  ) { }

  get containerClassName() {
    return `post-container ${this.additionalClass}`;
  }

  get isOwnPost() {
    if (!this.authService.userId || !this.post.userId) {
      return false;
    }

    return String(this.authService.user.id) === String(this.post.userId);
  }

  editPost(e) {
    e.stopPropagation();

    const path = `edit-post/${this.post.id}`;
    this.router.navigate([path]);
  }

  goToDetails = (e) => {
    e.stopPropagation();

    const path = `details/${this.post.id}`;
    this.router.navigate([path]);
  }

  deletePost = (e) => {
    e.stopPropagation();

    this.postsService.deletePost(Number(this.post.id));
  }

  trackByFn(index, item) {
    return item;
  }
}
