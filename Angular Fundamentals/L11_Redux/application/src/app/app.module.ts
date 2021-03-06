import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { coursesReducer } from './store/reducers/courses.reducers';
import { CreateCourseComponent } from './components/create-course/create-course.component';
import { ListCoursesComponent } from './components/list-courses/list-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCourseComponent,
    ListCoursesComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      courses:coursesReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
