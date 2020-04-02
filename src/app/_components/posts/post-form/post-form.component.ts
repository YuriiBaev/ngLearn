import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PostsService } from '@services/posts/posts.service';
import { AuthService } from '@services/auth-service/auth.service';

import { PendingService } from '@services/request/pending.service';
import { FormsValidationService } from '@services/forms-validation/forms-validation.service';
import { Post } from '@components/posts/interfaces';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  post: Post = { author: '', title: '', description: '', picture: '', userId: '' };
  postForm: FormGroup;
  authorSuggestions: string[];

  constructor(
    private formBuilder: FormBuilder,
    private postsService: PostsService,
    private authService: AuthService,
    private pendingService: PendingService,
    private formsValidation: FormsValidationService,
  ) { }

  ngOnInit() {
    const { author, title, description, picture, userId } = this.post ;

    this.postForm = this.formBuilder.group({
      author: [author, Validators.required],
      title: [title, Validators.required],
      description: [description, Validators.required],
      picture: [picture, Validators.required],
      userId: [userId],
    });

    const {name, surname} = this.authService.user;

    this.authorSuggestions = [name, surname, `${name} ${surname}`];
    this.postForm.patchValue({userId: this.authService.user.id});
  }

  validate(field: string) {
    return this.formsValidation.validate(this.postForm, field);
  }

  onSubmit() {
    if (!this.postForm.invalid) {
      this.postsService.addPost(this.postForm.value);
    }
  }
}
