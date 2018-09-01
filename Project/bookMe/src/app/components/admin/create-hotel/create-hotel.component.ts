import { ToastrService } from 'ngx-toastr';
import { RoomService } from './../../rooms/rooms.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-hotel',
  templateUrl: './create-hotel.component.html',
  styleUrls: ['./create-hotel.component.css']
})
export class CreateHotelComponent{
  private model

  constructor(private roomService:RoomService,private router:Router,private toastr:ToastrService) {
    this.model={
      name:'',
      city:'',
      img:'',
      description:''
    }
   }

  submit(){
    let city=this.model.city
    this.model.city=city.toLowerCase()
    this.roomService.createHotel(this.model)
    .subscribe((hotel:any)=>{
       this.toastr.success('Hotel created','Success')
       this.router.navigate([`/hotel/details/${hotel._id}`])
    })
  }

}
