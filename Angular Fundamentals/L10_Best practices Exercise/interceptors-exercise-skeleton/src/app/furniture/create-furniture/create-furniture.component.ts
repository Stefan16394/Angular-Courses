import { Component, OnInit } from '@angular/core';
import { CreateFurnitureModule } from '../models/create.model';
import { FurnitureService } from '../furnitureService';

@Component({
  selector: 'app-create-furniture',
  templateUrl: './create-furniture.component.html',
  styleUrls: ['./create-furniture.component.css']
})
export class CreateFurnitureComponent implements OnInit {
  bindingModel: CreateFurnitureModule
  constructor(private furnitureService:FurnitureService) {
    this.bindingModel = new CreateFurnitureModule("", "", 0, "", 0, "")
  }

  ngOnInit() {
  }

  create(){
     this.furnitureService.createFurniture(this.bindingModel).subscribe()
  }

}
