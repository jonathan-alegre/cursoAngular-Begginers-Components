import { Component, EventEmitter, input, Input, Output } from "@angular/core";
import { Course } from "../model/course";
import { RequiredValidator } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ReturnStatement } from "@angular/compiler";

@Component({
  selector: "course-card",
  imports: [CommonModule],
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
})
export class CourseCardComponent {
  @Input({
    required: true,
  })
  course: Course;

  @Input({ required: true })
  index: Number;

  @Output("courseSelected")
  courseEmitter = new EventEmitter<Course>();

  onCourseViewed() {
    console.log("card component - button clicked");

    this.courseEmitter.emit(this.course);
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  cardClasses() {

    return this.course.category.toLowerCase(); //string

    if (this.course.category == 'BEGINNER')
    {
      return ['beginner']; //array
    }

    return { 'beginner': this.course.category == 'BEGINNER' }; //object configuration
  }
}
