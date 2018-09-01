import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { roomRoutes } from './rooms.routing';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RoomHomeComponent } from './room-home/room-home.component';
import { SearchRoomComponent } from './search-room/search-room.component';
import { HotelComponent } from './hotel/hotel.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { BookingsComponent } from '../auth/bookings/bookings.component';

@NgModule({
  declarations: [
    RoomHomeComponent,
    SearchRoomComponent,
    HotelComponent,
    HotelDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(roomRoutes),
  ],
  exports:[
    RouterModule,
  ],
  providers: [
    
  ]
})
export class RoomModule { }