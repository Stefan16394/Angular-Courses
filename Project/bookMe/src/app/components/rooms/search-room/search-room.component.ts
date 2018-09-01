import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-room',
  templateUrl: './search-room.component.html',
  styleUrls: ['./search-room.component.css']
})
export class SearchRoomComponent implements OnInit {
  private city: string
  private from_date: string
  private to_date: string
  private error:string=null

  @Input() getAllHotels: (city, from_date, to_date) => {}
  constructor() { }

  ngOnInit() {

  }

  search(event) {
    const { city, from_date, to_date } = event.value
    const checkIn=new Date(from_date)
    const checkOut=new Date(to_date)
    if(checkOut<=checkIn || from_date==='' || to_date===''){
      this.error="Invalid date input.First date should be larger than second date."
      return
    }
    this.error=null
    this.getAllHotels(city.toLowerCase(), from_date, to_date)
  }
}
