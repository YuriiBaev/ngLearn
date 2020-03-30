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
import { PostsComponent } from './_components/posts/posts.component';
import { PostCreateComponent } from './_components/posts/post-create/post-create.component';
import { HeaderComponent } from './_components/header/header.component';

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
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
