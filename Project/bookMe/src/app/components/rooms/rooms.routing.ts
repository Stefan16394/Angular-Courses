import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { RoomHomeComponent } from './room-home/room-home.component';
import { Routes } from '@angular/router';


export const roomRoutes:Routes=[
    {path:'', pathMatch:'full',component:RoomHomeComponent},
    {path:'hotel/details/:id',component:HotelDetailsComponent}
]
