import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../models/course.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { RemoveCourse } from '../../store/actions/courses.actions';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {
  courses: Observable<Course[]>

  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {
    this.courses=this.store.select(state => state.courses)
  }

  delCourse(index){
     this.store.dispatch(new RemoveCourse(index))
  }

}
