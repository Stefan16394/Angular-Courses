import { Hotel } from './../../../models/hotel.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  @Input() hotel:Hotel
  constructor() { }

  ngOnInit() {
  }

}
