import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { AddCourse } from '../../store/actions/courses.actions';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  constructor(private store:Store<AppState>) { }

  ngOnInit() {
  }

  addCourse(name,url){
     this.store.dispatch(new AddCourse({name,url}))
  }

}
