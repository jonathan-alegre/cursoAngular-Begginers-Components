import { Component, EventEmitter, input, Input, Output } from "@angular/core";
import { Course } from "../model/course";
import { RequiredValidator } from "@angular/forms";

@Component({
  selector: "course-card",
  imports: [],
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",  
})
export class CourseCardComponent {  
  @Input(
    {
      required:true
    }
  ) 
  course: Course;

  @Input({required:true})
  index: Number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  onCourseViewed(){
    console.log("card component - button clicked");

    this.courseEmitter.emit(this.course);
  }
} 
