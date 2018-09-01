import { ToastrService } from 'ngx-toastr';
import { RoomService } from './../../rooms/rooms.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent {
  private model
 
  constructor(private route:ActivatedRoute,private roomService:RoomService,private router:Router,private toastr:ToastrService) {
    const{city,hotel_id}= this.route.snapshot.params
    this.model={
      description:'',
      city,
      hotel_id,
      img:'',
      persons:1,
      price:1
    }
   }

   submit(){
    this.roomService.createRoom(this.model)
    .subscribe((room:any)=>{
       this.toastr.success('Room created','Success')
       this.router.navigate([`/hotel/details/${room.hotel_id}`])
    })

  }

}
