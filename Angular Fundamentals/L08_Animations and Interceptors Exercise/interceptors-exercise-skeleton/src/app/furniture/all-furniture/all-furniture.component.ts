import { Component, OnInit } from '@angular/core';
import { CreateFurnitureModule } from '../models/create.model';
import { FurnitureModel } from '../models/furniture.model';
import { FurnitureService } from '../furnitureService';

@Component({
  selector: 'app-all-furniture',
  templateUrl: './all-furniture.component.html',
  styleUrls: ['./all-furniture.component.css']
})
export class AllFurnitureComponent implements OnInit {
  furnitures: FurnitureModel[]
  constructor(private furnitureService:FurnitureService) {
  }

  ngOnInit() {
     this.furnitureService.getAll().subscribe(data=>{
        this.furnitures=data
     })
  }
}
