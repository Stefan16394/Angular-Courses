import { Component, OnInit } from '@angular/core';
import { FurnitureModel } from '../models/furniture.model';
import { FurnitureService } from '../furnitureService';
import { AuthService } from '../../authentication/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-furniture',
  templateUrl: './all-furniture.component.html',
  styleUrls: ['./all-furniture.component.css']
})
export class AllFurnitureComponent implements OnInit {
  furnitures: FurnitureModel[]
  pageSize:number=3;
  currentPage:number=1

  constructor(private furnitureService:FurnitureService,private authService:AuthService,
  private toastr:ToastrService,private router:Router) {
  }

  ngOnInit() {
     this.furnitureService.getAll().subscribe(data=>{
        this.furnitures=data
     })
  }

  changePage(page){
    this.currentPage=page
  }

  deleteItem(id){
    this.furnitureService.remove(id).subscribe(()=>{
      this.toastr.success("Product deleted!")
      this.furnitureService.getAll().subscribe(data=>{
        this.furnitures=data
      })
    })
  }
}
