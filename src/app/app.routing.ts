import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './_components/authentication/login/login.component';
import { HomeComponent } from './_components/home/home.component';
import { AuthGuardService } from './_services/auth-service/auth-guard.service';
import { RegistrationComponent } from './_components/authentication/registration/registration.component';
import { LOGIN, REGISTRATION, ADD_POST } from './constants/routes';
import { PostCreateComponent } from './_components/posts/post-create/post-create.component';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: ADD_POST, component: PostCreateComponent, canActivate: [AuthGuardService] },
  { path: LOGIN, component: LoginComponent },
  { path: REGISTRATION, component: RegistrationComponent },

  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
