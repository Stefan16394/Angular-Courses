import { NgModule } from '@angular/core'
import { furnitureComponents } from '.';
import { FormsModule } from '@angular/forms';
import { FurnitureService } from './furnitureService';
import { CommonModule } from '@angular/common';
import { FurnitureRouting } from './furniture.routing';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
    declarations: [
        ...furnitureComponents,
    ],
    imports: [
        FormsModule,
        FurnitureRouting,
        CommonModule,
        NgxPaginationModule
    ],
    providers: [
        FurnitureService
    ]
})
export class FurnitureModule {

}