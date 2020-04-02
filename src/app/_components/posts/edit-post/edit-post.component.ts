import { Component, OnInit } from '@angular/core';
import { PostsService } from '@services/posts/posts.service';
import { ActivatedRoute } from '@angular/router';
import { PendingService } from '@services/request/pending.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  constructor(
    private postsService: PostsService,
    private router: ActivatedRoute,
    private pendingService: PendingService,
  ) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.postsService.getPostDetail(params.get('id'));
    });
  }
}
