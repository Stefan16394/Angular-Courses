import { Course } from "../models/course.model";

export interface  AppState{
   readonly courses:Course[]
}