import { Injectable } from '@angular/core';
import { Course } from '../shared/course';
import { COURSES } from '../shared/courses';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourses(): Course[] {
  	return COURSES;
  }
}
