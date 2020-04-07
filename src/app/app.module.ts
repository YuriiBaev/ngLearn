import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatVideoModule } from 'mat-video';

import { NgxSpinnerModule } from 'ngx-spinner';

import { HomeComponent } from '@components/home/home.component';
import { PostComponent } from '@components/posts/post/post.component';
import { PostsComponent } from '@components/posts/posts-list/posts.component';
import { PostFormComponent } from '@components/posts/post-form/post-form.component';
import { HeaderComponent } from '@components/header/header.component';
import { ProfileComponent } from '@components/profile/profile.component';
import { MyPostsComponent } from '@components/posts/my-posts/my-posts.component';
import { EditProfileComponent } from '@components/profile/edit-profile/edit-profile.component';
import { JwtInterceptor } from '@services/interseptors/jwt.interseptor';
import { RequestInterceptor } from '@services/interseptors/request.interseptor';
import { PostDetailComponent } from '@components/posts/post-detail/post-detail.component';
import { EditPostComponent } from '@components/posts/edit-post/edit-post.component';

import { TruncatePipe } from './_pipes/truncate.pipe';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { CapitalizePipe } from './_pipes/capitalize.pipe';
import { SharedComponentsModule } from './_modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    SharedComponentsModule,
    MatVideoModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    PostsComponent,
    PostFormComponent,
    HeaderComponent,
    TruncatePipe,
    ProfileComponent,
    MyPostsComponent,
    EditProfileComponent,
    PostDetailComponent,
    EditPostComponent,
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
