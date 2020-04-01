import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { LoginComponent } from '@components/authentication/login/login.component';
import { HomeComponent } from '@components/home/home.component';
import { RegistrationComponent } from '@components/authentication/registration/registration.component';
import { PostComponent } from '@components/posts/post/post.component';
import { PostsComponent } from '@components/posts/posts-list/posts.component';
import { PostCreateComponent } from '@components/posts/post-create/post-create.component';
import { HeaderComponent } from '@components/header/header.component';
import { ProfileComponent } from '@components/profile/profile.component';
import { MyPostsComponent } from '@components/my-posts/my-posts.component';
import { EditProfileComponent } from '@components/profile/edit-profile/edit-profile.component';
import { SelectComponent } from '@components/_common/select/select.component';
import { AutocompleteComponent } from '@components/_common/autocomlete/autocomplete.component';
import { JwtInterceptor } from '@services/interseptors/jwt.interseptor';
import { RequestInterceptor } from '@services/interseptors/request.interseptor';

import { TruncatePipe } from './_pipes/truncate.pipe';
import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    appRoutingModule,
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
    AutocompleteComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
