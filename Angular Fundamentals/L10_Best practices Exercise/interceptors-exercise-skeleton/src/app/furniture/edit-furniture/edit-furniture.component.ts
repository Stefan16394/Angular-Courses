import { Component, OnInit } from '@angular/core';
import { FurnitureModel } from '../models/furniture.model';
import { ActivatedRoute } from '@angular/router';
import { FurnitureService } from '../furnitureService';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-furniture',
  templateUrl: './edit-furniture.component.html',
  styleUrls: ['./edit-furniture.component.css']
})
export class EditFurnitureComponent implements OnInit {
   bindingModel:FurnitureModel

  constructor(private route:ActivatedRoute,private furnitureService:FurnitureService,
  private toastr:ToastrService) { }

  ngOnInit() {
    const id=this.route.snapshot.params.id
     this.furnitureService.getFurnitureById(id).subscribe(data=>{
        this.bindingModel=data
     })
  }

  edit(){
    const id=this.route.snapshot.params.id
     this.furnitureService.editFurniture(id,this.bindingModel).subscribe(()=>{
        this.toastr.success('Product edited!')
     })
  }

}
