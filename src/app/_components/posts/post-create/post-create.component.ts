import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../../../_services/posts/posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  addPostForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private postsService: PostsService,
  ) { }

  ngOnInit() {
    this.addPostForm = this.formBuilder.group({
      author: ['', Validators.required],
      title: ['', Validators.required],
      picture: [''],
      description: [''],
    });
  }

  onSubmit() {
    this.postsService.addPost(this.addPostForm.value);
  }
}
