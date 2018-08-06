import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../furnitureService';
import { FurnitureModel } from '../models/furniture.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-furniture',
  templateUrl: './my-furniture.component.html',
  styleUrls: ['./my-furniture.component.css']
})
export class MyFurnitureComponent implements OnInit {

  myFurnitures:FurnitureModel[]

  constructor(private furnitureService:FurnitureService,private router:Router) { }

  ngOnInit() {
    this.furnitureService.myFurniture().subscribe(data=>{
      this.myFurnitures=data
    })
  }

  delete(id){
     this.furnitureService.remove(id).subscribe(()=>{
         this.router.navigate(['/furniture/all'])
     })
  }

}
