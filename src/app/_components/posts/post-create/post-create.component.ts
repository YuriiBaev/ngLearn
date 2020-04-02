import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PostsService } from '@services/posts/posts.service';
import { AuthService } from '@services/auth-service/auth.service';

import { convertToB64 } from 'app/helper/file';
import { PendingService } from '@services/request/pending.service';
import { FormsValidationService } from '@services/forms-validation/forms-validation.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  addPostForm: FormGroup;
  authorSuggestions: string[];

  constructor(
    private formBuilder: FormBuilder,
    private postsService: PostsService,
    private authService: AuthService,
    private pendingService: PendingService,
    private formsValidation: FormsValidationService,
  ) { }

  ngOnInit() {
    this.addPostForm = this.formBuilder.group({
      author: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      picture: ['', Validators.required],
    });

    const {name, surname} = this.authService.user;

    this.authorSuggestions = [name, surname, `${name} ${surname}`];
  }

  setPhoto = async (event) => {
    const image = event.target.files[0];
    const converted = await convertToB64(image);

    this.addPostForm.patchValue({picture: converted});
  }

  setFormValue = (field) => (value) => {
    this.addPostForm.patchValue({[field]: value});
  }

  validate(field: string) {
    return this.formsValidation.validate(this.addPostForm, field);
  }

  onSubmit() {
    this.addPostForm.patchValue({userId: this.authService.user.id});

    if (!this.addPostForm.invalid) {
      this.postsService.addPost(this.addPostForm.value);
    }
  }
}
