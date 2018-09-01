import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {userRoutes } from './auth.routing';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BookingsComponent } from './bookings/bookings.component';


@NgModule({
  declarations: [
      RegisterComponent,
      LoginComponent,
      BookingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(userRoutes)
  ],
  exports:[
    RouterModule
   ]
})
export class AuthModule { }