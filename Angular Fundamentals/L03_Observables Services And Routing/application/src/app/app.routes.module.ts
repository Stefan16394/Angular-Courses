import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    { path: 'home', component: ServiceComponent },
    { path: 'about/:name', component: AboutComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutesModule {

}