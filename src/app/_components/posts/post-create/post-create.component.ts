import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PostsService } from '@services/posts/posts.service';
import { AuthService } from '@services/auth-service/auth.service';

import { convertToB64 } from 'app/helper/file';
import { PendingService } from '@services/request/pending.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  addPostForm: FormGroup;
  authorSuggestions: string[];

  constructor(
    private formBuilder: FormBuilder,
    private postsService: PostsService,
    private authService: AuthService,
    private pendingService: PendingService,
  ) { }

  ngOnInit() {
    this.addPostForm = this.formBuilder.group({
      author: ['', Validators.required],
      title: ['', Validators.required],
      picture: [''],
      description: [''],
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

  onSubmit() {
    this.addPostForm.patchValue({userId: this.authService.user.id});

    this.postsService.addPost(this.addPostForm.value);
  }
}
