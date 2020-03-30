import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../_services/posts/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  constructor(
    private postsService: PostsService,
  ) { }

  ngOnInit(): void {
    this.postsService.getPosts();
  }

  trackByFn(index, item) {
    return item.id;
  }
}
