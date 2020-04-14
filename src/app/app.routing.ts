import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '@components/home/home.component';
import { AuthGuardService } from '@services/auth-service/auth-guard.service';
import { PostFormComponent } from '@components/posts/post-form/post-form.component';
import { ProfileComponent } from '@components/profile/profile.component';
import { MyPostsComponent } from '@components/posts/my-posts/my-posts.component';
import { EditProfileComponent } from '@components/profile/edit-profile/edit-profile.component';

import * as route from 'app/constants/routes';
import { PostDetailComponent } from '@components/posts/post-detail/post-detail.component';
import { EditPostComponent } from '@components/posts/edit-post/edit-post.component';
import { NgModule } from '@angular/core';
import { CustomPreloadingStrategy } from './custom-preloading-strategy';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: route.ADD_POST, component: PostFormComponent, canActivate: [AuthGuardService], data: {animation: 'AddPost'} },
  { path: route.PROFILE, component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: route.MY_POSTS, component: MyPostsComponent, canActivate: [AuthGuardService], data: {animation: 'MyPosts'} },
  { path: route.EDIT_PROFILE, component: EditProfileComponent, canActivate: [AuthGuardService] },
  { path: route.DETAILS, component: PostDetailComponent, canActivate: [AuthGuardService] },
  { path: route.EDIT_POST, component: EditPostComponent, canActivate: [AuthGuardService] },
  {
    path: route.AUTH,
    loadChildren: () => import('@modules/authentication/authentication.module').then(m => m.AuthenticationModule),
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: CustomPreloadingStrategy,
      onSameUrlNavigation: 'reload'
    })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
