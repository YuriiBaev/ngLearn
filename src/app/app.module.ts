import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule} from '@angular/cdk/drag-drop';

import { NgxSpinnerModule } from 'ngx-spinner';

import { LoginComponent } from '@components/authentication/login/login.component';
import { HomeComponent } from '@components/home/home.component';
import { RegistrationComponent } from '@components/authentication/registration/registration.component';
import { PostComponent } from '@components/posts/post/post.component';
import { PostsComponent } from '@components/posts/posts-list/posts.component';
import { PostFormComponent } from '@components/posts/post-form/post-form.component';
import { HeaderComponent } from '@components/header/header.component';
import { ProfileComponent } from '@components/profile/profile.component';
import { MyPostsComponent } from '@components/posts/my-posts/my-posts.component';
import { EditProfileComponent } from '@components/profile/edit-profile/edit-profile.component';
import { SelectComponent } from '@components/_common/form-fields/select/select.component';
import { AutocompleteComponent } from '@components/_common/form-fields/autocomlete/autocomplete.component';
import { JwtInterceptor } from '@services/interseptors/jwt.interseptor';
import { RequestInterceptor } from '@services/interseptors/request.interseptor';
import { PostDetailComponent } from '@components/posts/post-detail/post-detail.component';
import { EditPostComponent } from '@components/posts/edit-post/edit-post.component';
import { InputFormComponent } from '@components/_common/form-fields/input-form/input-form.component';
import { ImageUploaderComponent } from '@components/_common/form-fields/image-uploader/image-uploader.component';
import { TextareaFormComponent } from '@components/_common/form-fields/textarea-form/textarea-form.component';

import { TruncatePipe } from './_pipes/truncate.pipe';
import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';
import { CapitalizePipe } from './_pipes/capitalize.pipe';

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    appRoutingModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    DragDropModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent,
    PostComponent,
    PostsComponent,
    PostFormComponent,
    HeaderComponent,
    TruncatePipe,
    ProfileComponent,
    MyPostsComponent,
    EditProfileComponent,
    SelectComponent,
    AutocompleteComponent,
    PostDetailComponent,
    InputFormComponent,
    ImageUploaderComponent,
    EditPostComponent,
    TextareaFormComponent,
    CapitalizePipe,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
