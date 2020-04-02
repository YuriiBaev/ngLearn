import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PostsService } from '@services/posts/posts.service';
import { AuthService } from '@services/auth-service/auth.service';

import { PendingService } from '@services/request/pending.service';
import { FormsValidationService } from '@services/forms-validation/forms-validation.service';
import { Post } from '@components/posts/interfaces';

const defaultPost = {
  author: '', title: '', description: '', picture: '', userId: ''
};

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit, OnDestroy {
  @Input() editMode = false;
  @Input() post: Post;

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
    this.formInitialize(defaultPost);

    if (this.editMode) {
      this.postsService.postSubject$.subscribe((post) => {
        if (!post) { return; }

        this.formInitialize(post);
      });
    }

    this.setSuggestions();
  }

  setSuggestions() {
    const {name, surname} = this.authService.user;
    this.authorSuggestions = [name, surname, `${name} ${surname}`];
  }

  formInitialize(post) {
    const { author, title, description, picture, userId } = post;

    this.postForm = this.formBuilder.group({
      author: [author, Validators.required],
      title: [title, Validators.required],
      description: [description, Validators.required],
      picture: [picture, Validators.required],
      userId: [userId],
    });

    this.postForm.patchValue({userId: this.authService.user.id});
  }

  validate(field: string) {
    return this.formsValidation.validate(this.postForm, field);
  }

  onSubmit() {
    const formData = this.postForm.value;

    if (!this.postForm.invalid) {
      if (this.editMode) {
        this.postsService.updatePost(this.postForm.value, this.postsService.post.id);
        return;
      }

      this.postsService.addPost(formData);
    }
  }

  ngOnDestroy(): void {
    this.postForm.reset();
  }
}
