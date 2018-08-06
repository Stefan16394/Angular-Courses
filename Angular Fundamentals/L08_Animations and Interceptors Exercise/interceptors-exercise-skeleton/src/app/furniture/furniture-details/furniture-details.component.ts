import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FurnitureModel } from '../models/furniture.model';
import { FurnitureService } from '../furnitureService';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-furniture-details',
  templateUrl: './furniture-details.component.html',
  styleUrls: ['./furniture-details.component.css']
})
export class FurnitureDetailsComponent implements OnInit {
  furniture: FurnitureModel
  id: string

  constructor(private activatedRoute: ActivatedRoute, private furnitureService: FurnitureService) {
    this.id = this.activatedRoute.snapshot.params['id']
  }

  ngOnInit() {
    this.furnitureService.furnitureDetails(this.id).subscribe(data => {
      this.furniture = data
    })
  }
}
