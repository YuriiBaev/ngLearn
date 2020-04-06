import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';

import { LoginComponent } from './login.component/login.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { RegistrationComponent } from './registration.component/registration.component';
import * as route from 'app/constants/routes';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: route.LOGIN, component: LoginComponent},
      {path: route.REGISTRATION, component: RegistrationComponent},
    ]),
    SharedComponentsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    SharedComponentsModule,
  ],
  exports: [
    RouterModule,
  ]
})
export class AuthenticationModule { }
