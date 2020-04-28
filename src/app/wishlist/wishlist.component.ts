import { Component, OnInit } from '@angular/core';
import { Course } from '../shared/course';
import { COURSES } from '../shared/courses';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

	courses: Course[];

  selectedCourse: Course;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }


}
