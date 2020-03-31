import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { LoginComponent } from './_components/authentication/login/login.component';
import { HomeComponent } from './_components/home/home.component';
import { appRoutingModule } from './app.routing';
import { JwtInterceptor } from './_services/request/jwt.interseptor';
import { RegistrationComponent } from './_components/authentication/registration/registration.component';
import { RouterModule } from '@angular/router';
import { PostComponent } from './_components/posts/post/post.component';
import { PostsComponent } from './_components/posts/posts-list/posts.component';
import { PostCreateComponent } from './_components/posts/post-create/post-create.component';
import { HeaderComponent } from './_components/header/header.component';
import { TruncatePipe } from './_pipes/truncate.pipe';
import { ProfileComponent } from './_components/profile/profile.component';
import { MyPostsComponent } from './_components/my-posts/my-posts.component';
import { EditProfileComponent } from './_components/profile/edit-profile/edit-profile.component';
import { SelectComponent } from './_components/_common/select/select.component';

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    appRoutingModule,
    AgGridModule.withComponents([]),
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent,
    PostComponent,
    PostsComponent,
    PostCreateComponent,
    HeaderComponent,
    TruncatePipe,
    ProfileComponent,
    MyPostsComponent,
    EditProfileComponent,
    SelectComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
