import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../auth/auth.service';
import { Hotel } from './../../../models/hotel.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from '../../../models/room.model';
import { RoomService } from '../rooms.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
  private hotel: Hotel
  private rooms: Array<Room>
  private soldRooms: Array<Object>
  private rating: string
  private canRate: boolean

  constructor(private roomService:RoomService, private route: ActivatedRoute,private authService:AuthService,private router:Router,private toastr:ToastrService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id
    const { from_date, to_date } = JSON.parse(sessionStorage.getItem('dates'))
    const query = `https://baas.kinvey.com/appdata/kid_r1bG4BgIm/reserved?query={"hotel_id":"${id}","$or":[{"$and":[{"from_date":{"$lte": "${from_date}"}}, {"to_date":{"$gte": "${from_date}"}}]}, {"$and":[{"from_date":{"$gte": "${from_date}"}}, {"from_date":{"$lte": "${to_date}"}}]}]}`

     this.roomService.getHotelById(id)
      .subscribe((hotel: Hotel) => {
        this.hotel = hotel
        this.findRating()
      })

    this.roomService.getRoomByHotelId(id)
      .subscribe((rooms:Array<Room>) => {
        this.rooms = rooms
        this.roomService.getAvailableRoomsInHotel(id,from_date,to_date)
          .subscribe((sold:Array<Object>) => {
            this.soldRooms = sold
            const ids = this.soldRooms.map((r:any) => r.roomId)
            let availableRooms = [...this.rooms]
            let soldRooms = []
            for (let i of ids) {
              const room = this.rooms.find(r => r._id === i)
              if (room) {
                soldRooms.push(room)
              }
              availableRooms = availableRooms.filter(r => r._id !== i)
            }

            this.rooms = availableRooms
            this.soldRooms = soldRooms

          })
      })
  }

  countDays(room) {
    const { from_date, to_date } = JSON.parse(sessionStorage.getItem('dates'))
    const timeDiff = +new Date(from_date) - +new Date(to_date)
    const days = timeDiff / (1000 * 60 * 60 * 24)
    return Math.abs(days) * room.price
  }

  rate(form) {
    const body = {
      rating: form.value.select,
      hotel_id: this.hotel._id,
      ratedBy: localStorage.getItem('userId')
    }
    this.roomService.rateHotel(body).subscribe(()=>{
      location.reload()
    })
  }

  findRating() {
    this.roomService.getHotelRating(this.hotel._id)
      .subscribe((data: any) => {
        const ratings = data.map(r => r.rating)
        let rating = (ratings.reduce((el, total) => {
          return +el + +total
        }, 0) / ratings.length).toFixed(2)
        this.rating = rating
        const canRate = data.find(r => r.ratedBy === localStorage.getItem('userId'))
        this.canRate = !canRate
      })
  }

  bookRoom(room) {
    if(!this.authService.checkIfLogged()){
      this.router.navigate(['/user/login'])
      return
    }
    const { from_date, to_date } = JSON.parse(sessionStorage.getItem('dates'))
    const body = {
      hotel_id: room.hotel_id,
      city: room.city,
      roomId: room._id,
      from_date,
      to_date,
      by_personId:localStorage.getItem('userId')
    }

    this.roomService.bookRoom(body)
      .subscribe(()=>{
        this.toastr.success('Room booked!','Success')
        location.reload()
      })
  }

  deleteRoom(id) {
    this.roomService.deleteRoom(id)
      .subscribe(data => {
        this.toastr.success('Room deleted!','Success')
        location.reload()
      })
  }
}
