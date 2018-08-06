import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import { HttpClientModule } from '@angular/common/http';
import { ServiceComponent } from './service.component';
import { homeService } from './homeService';
import { AboutComponent } from '../about/about.component';

@NgModule({
    declarations:[
        ServiceComponent,
        AboutComponent
    ],
   imports:[
       CommonModule,
       HttpClientModule
   ],
   exports:[
       ServiceComponent
   ],
   providers:[homeService]
})

export class HomeModule{

}