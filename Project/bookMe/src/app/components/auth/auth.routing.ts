import { AuthGuard } from './../../guards/auth.guard';
import { Routes } from '@angular/router';

import { BookingsComponent } from './bookings/bookings.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


export const userRoutes:Routes=[
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'bookings', component: BookingsComponent, canActivate:[AuthGuard] }
]
