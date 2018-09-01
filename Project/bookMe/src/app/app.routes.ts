import { AuthGuard } from './guards/auth.guard';
import { AdminModule } from './components/admin/admin.module';
import { Routes, CanActivate } from '@angular/router';
import { AuthModule } from './components/auth/auth.module'
import { RoomHomeComponent } from './components/rooms/room-home/room-home.component';
import { RoleGuard } from './guards/role.guard';

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: RoomHomeComponent },
    { path: 'user', loadChildren: () => AuthModule },
    { path: 'admin',canActivate:[AuthGuard,RoleGuard], loadChildren: () => AdminModule  },
    { path: 'rooms', loadChildren: './components/rooms/rooms.module' }
]
