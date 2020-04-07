import { Component, Input, ViewChild } from '@angular/core';
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
  @Input() isPlaying = false;

  @ViewChild('videoPlayer', { static: false }) videoPlayer;

  constructor(
    private postsService: PostsService,
    private authService: AuthService,
    private router: Router,
  ) {
  }

  get containerClassName() {
    return `post-container ${this.additionalClass}`;
  }

  get isOwnPost() {
    if (!this.authService.user.id || !this.post.userId) {
      return false;
    }

    return String(this.authService.user.id) === String(this.post.userId);
  }

  timeChange(e) {
    if (e > 5) {
      this.videoPlayer.video.nativeElement.currentTime = 1;
    }
  }

  onMouseEnter() {
    this.videoPlayer.video.nativeElement.play();
  }


  onMouseLeave() {
    this.videoPlayer.video.nativeElement.pause();
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
