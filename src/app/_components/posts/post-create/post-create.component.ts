import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../../../_services/posts/posts.service';
import { convertToB64 } from 'src/app/helper/file';

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

  setPhoto = async (event) => {
    const image = event.target.files[0];
    const converted = await convertToB64(image);

    this.addPostForm.patchValue({picture: converted});
  }

  onSubmit() {
    this.postsService.addPost(this.addPostForm.value);
  }
}
