import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxSpinnerModule } from 'ngx-spinner';

import { HomeComponent } from '@components/home/home.component';
import { PostComponent } from '@components/posts/post/post.component';
import { PostsComponent } from '@components/posts/posts-list/posts.component';
import { PostFormComponent } from '@components/posts/post-form/post-form.component';
import { HeaderComponent } from '@components/header/header.component';
import { ProfileComponent } from '@components/profile/profile.component';
import { MyPostsComponent } from '@components/posts/my-posts/my-posts.component';
import { EditProfileComponent } from '@components/profile/edit-profile/edit-profile.component';
import { JwtInterceptor } from '@services/interceptors/jwt.interceptor';
import { RequestInterceptor } from '@services/interceptors/request.interceptor';
import { PostDetailComponent } from '@components/posts/post-detail/post-detail.component';
import { EditPostComponent } from '@components/posts/edit-post/edit-post.component';
import { SharedComponentsModule } from '@modules/shared-components/shared-components.module';

import { TruncatePipe } from './_pipes/truncate.pipe';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { CapitalizePipe } from './_pipes/capitalize.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxSpinnerModule,
    SharedComponentsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
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
