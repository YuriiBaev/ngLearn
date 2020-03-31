import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../interfaces';
import { PostsService } from '../../../_services/posts/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post;

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit() {
  }

  editPost() {

  }
}
