import { AuthGuard } from './../../guards/auth.guard';
import { EditRoomComponent } from './edit-room/edit-room.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { CreateHotelComponent } from './create-hotel/create-hotel.component';
import { Routes } from '@angular/router';


export const adminRoutes:Routes=[

    {path:'hotel/create',component:CreateHotelComponent},
    {path:'room/create/:city/:hotel_id',component:CreateRoomComponent},
    {path:'room/edit/:room_id',component:EditRoomComponent}
]
