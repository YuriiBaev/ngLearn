import { Component, OnInit } from '@angular/core';
import { PostsService } from '@services/posts/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
})
export class PostDetailComponent implements OnInit {

  constructor(
    private postsService: PostsService,
    private router: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.postsService.getPostDetail(params.get('id'));
    });
  }

}