import { Component, Input } from '@angular/core';
import { Post } from '../interfaces';
import { PostsService } from '@services/posts/posts.service';
import { Router } from '@angular/router';

import { DETAILS } from 'app/constants/routes';
import { AuthService } from '@services/auth-service/auth.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() post: Post;
  @Input() additionalClass = '';

  constructor(
    private postsService: PostsService,
    private authService: AuthService,
    private router: Router,
  ) { }

  get containerClassName() {
    return `post-container ${this.additionalClass}`;
  }

  editPost() {
  }

  goToDetails = (e) => {
    e.stopPropagation();

    this.router.navigate([`details/${this.post.id}`]);
  }

  deletePost = (e) => {
    e.stopPropagation();

    this.postsService.deletePost(Number(this.post.id));
  }
}
