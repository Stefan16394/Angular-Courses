import { RoomService } from './../../rooms/rooms.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  private bookings

  constructor(private roomService:RoomService) { }

  ngOnInit() {
    const userId=localStorage.getItem('userId')
    this.roomService.getUserBookings(userId)
    .subscribe(bookings=>{
      this.bookings=bookings
    })
  }
}
