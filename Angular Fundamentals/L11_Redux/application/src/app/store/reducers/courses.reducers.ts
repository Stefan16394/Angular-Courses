import { Course } from "../../models/course.model";
import * as CoursesActions from '../actions/courses.actions'

const initalState: Course[] = [
    { name: 'Angular', url: 'http://google.com' }
]

function addCourse(state: Course[], course) {
    return [...state, course]
}

function removeCourse(state: Course[], index) {
    const courseToRemove=state[index]
    return [...state.filter(c=>c!=courseToRemove)]
}

export function coursesReducer(
    state: Course[] = initalState,
    action: CoursesActions.Actions) {
    switch (action.type) {
        case CoursesActions.ADD_COURSE:
            return addCourse(state, action.payload)
        case CoursesActions.REMOVE_COURSE:
            return removeCourse(state,action.payload)
        default:
            return state;
    }
}