import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '@components/authentication/login/login.component';
import { HomeComponent } from '@components/home/home.component';
import { AuthGuardService } from '@services/auth-service/auth-guard.service';
import { RegistrationComponent } from '@components/authentication/registration/registration.component';
import { PostCreateComponent } from '@components/posts/post-create/post-create.component';
import { ProfileComponent } from '@components/profile/profile.component';
import { MyPostsComponent } from '@components/my-posts/my-posts.component';
import { EditProfileComponent } from '@components/profile/edit-profile/edit-profile.component';

import { LOGIN, REGISTRATION, ADD_POST, PROFILE, MY_POSTS, EDIT_PROFILE } from './constants/routes';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: ADD_POST, component: PostCreateComponent, canActivate: [AuthGuardService] },
  { path: PROFILE, component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: MY_POSTS, component: MyPostsComponent, canActivate: [AuthGuardService] },
  { path: EDIT_PROFILE, component: EditProfileComponent, canActivate: [AuthGuardService] },
  { path: LOGIN, component: LoginComponent },
  { path: REGISTRATION, component: RegistrationComponent },

  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
