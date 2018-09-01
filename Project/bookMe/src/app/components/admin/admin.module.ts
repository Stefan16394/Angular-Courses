import { adminRoutes } from './admin.routing';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EditRoomComponent } from './edit-room/edit-room.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { CreateHotelComponent } from './create-hotel/create-hotel.component';

@NgModule({
  declarations: [
    CreateHotelComponent,
    CreateRoomComponent,
    EditRoomComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(adminRoutes),
  ],
  exports:[
    RouterModule,
  ],
  providers: [
    
  ]
})
export class AdminModule { }