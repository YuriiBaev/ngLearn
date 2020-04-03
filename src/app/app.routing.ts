import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '@components/authentication/login/login.component';
import { HomeComponent } from '@components/home/home.component';
import { AuthGuardService } from '@services/auth-service/auth-guard.service';
import { RegistrationComponent } from '@components/authentication/registration/registration.component';
import { PostFormComponent } from '@components/posts/post-form/post-form.component';
import { ProfileComponent } from '@components/profile/profile.component';
import { MyPostsComponent } from '@components/posts/my-posts/my-posts.component';
import { EditProfileComponent } from '@components/profile/edit-profile/edit-profile.component';

import * as route from 'app/constants/routes';
import { PostDetailComponent } from '@components/posts/post-detail/post-detail.component';
import { EditPostComponent } from '@components/posts/edit-post/edit-post.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: route.ADD_POST, component: PostFormComponent, canActivate: [AuthGuardService] },
  { path: route.PROFILE, component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: route.MY_POSTS, component: MyPostsComponent, canActivate: [AuthGuardService] },
  { path: route.EDIT_PROFILE, component: EditProfileComponent, canActivate: [AuthGuardService] },
  { path: route.DETAILS, component: PostDetailComponent, canActivate: [AuthGuardService] },
  { path: route.EDIT_POST, component: EditPostComponent, canActivate: [AuthGuardService] },
  { path: route.LOGIN, component: LoginComponent },
  { path: route.REGISTRATION, component: RegistrationComponent },

  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
