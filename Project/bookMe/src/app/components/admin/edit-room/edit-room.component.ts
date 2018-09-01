import { RoomService } from './../../rooms/rooms.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent implements OnInit {

  private model

  constructor(private route: ActivatedRoute, private router: Router, private roomService: RoomService,private toastr:ToastrService) {

  }

  ngOnInit(): void {
    const { room_id } = this.route.snapshot.params
    this.roomService.getRoomById(room_id)
      .subscribe((room: any) => {
        this.model = {
          description: room.description,
          img: room.img,
          price: room.price,
          city: room.city,
          persons:room.persons,
          hotel_id: room.hotel_id
        }
      })
  }

  submit() {
    const { room_id } = this.route.snapshot.params
    this.roomService.editRoom(room_id, this.model)
      .subscribe((room: any) => {
        this.toastr.success('Room edited','Success')
        this.router.navigate([`/hotel/details/${room.hotel_id}`])
      })

  }

}
