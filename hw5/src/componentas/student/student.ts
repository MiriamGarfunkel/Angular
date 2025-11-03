import { Component, EventEmitter, Input, Output } from '@angular/core';
import { student } from '../../models/student';

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
@Input() studentDetails: student| undefined;
@Output() deleteStudentEvent = new EventEmitter<student>

deleteStudent(){
  this.deleteStudentEvent.emit(this.studentDetails);
}
}
