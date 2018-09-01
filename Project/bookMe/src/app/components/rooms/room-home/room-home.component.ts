import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../../models/hotel.model';

@Component({
  selector: 'app-room-home',
  templateUrl: './room-home.component.html',
  styleUrls: ['./room-home.component.css']
})
export class RoomHomeComponent implements OnInit {
  private hotels :Array<Hotel>

  constructor(private http:HttpClient) {
    this.getAllHotels=this.getAllHotels.bind(this)
   }

  ngOnInit() {
  }
  
  getAllHotels(city,from_date,to_date){
    sessionStorage.setItem('dates',JSON.stringify({
      from_date,to_date
    }))
    const query=`https://baas.kinvey.com/appdata/kid_r1bG4BgIm/reserved?query={"city":"${city}" ,"$or":[{"$and":[{"from_date":{"$lte": "${from_date}"}}, {"to_date":{"$gte": "${from_date}"}}]}, {"$and":[{"from_date":{"$gte": "${from_date}"}}, {"from_date":{"$lte": "${to_date}"}}]}]}
    `
    this.http.get(
      query)
       .subscribe((reservedRooms:any)=>{
          const reserved=JSON.stringify(reservedRooms.map(room=>room.roomId))
         this.http.get(`https://baas.kinvey.com/appdata/kid_r1bG4BgIm/room?query={"_id": {"$nin": ${reserved}} }`)
         .subscribe((data:any)=>{
             const hotels=JSON.stringify(data.map(d=>d.hotel_id))
            this.http.get(`https://baas.kinvey.com/appdata/kid_r1bG4BgIm/hotels?query={"_id": {"$in": ${hotels}},"city":"${city}" }`)
            .subscribe((hotel:Array<Hotel>)=>{
              this.hotels=hotel
            })
         })
       })
  }

}
