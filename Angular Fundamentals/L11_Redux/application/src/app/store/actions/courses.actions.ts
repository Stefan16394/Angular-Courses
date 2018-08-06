import {Action} from '@ngrx/store'
import {Course} from '../../models/course.model'


export const ADD_COURSE='[Course] Add'
export const REMOVE_COURSE='[Course] Remove' 

export class AddCourse implements Action{
    readonly type: string=ADD_COURSE
    constructor(public payload:Course){ }
}

export class RemoveCourse implements Action{
    readonly type:string=REMOVE_COURSE
    constructor(public payload:number){ }
}

export type Actions=AddCourse | RemoveCourse