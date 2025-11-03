import { Component, OnInit } from '@angular/core';
import { student } from '../../models/student';
import { Student } from '../student/student';



@Component({
  selector: 'app-class',
  imports: [Student

  ],
  templateUrl: './class1.html',
  styleUrl: './class1.css',
})
export class  Class1 implements OnInit{
  students:student []=[];
  ngOnInit():void{
    var stu1=new student();
    stu1.name="miriam";
    stu1.age=19;
    stu1.adress="sorotzkin";

    this.students.push(stu1);

        var stu2=new student();
    stu2.name="tamar";
    stu2.age=10;
    stu2.adress="ramat hagolan";

    this.students.push(stu2);

        var stu3=new student();
    stu3.name="shiffy";
    stu3.age=5;
    stu3.adress="yechezkel hanavi";

    this.students.push(stu3);

        var stu4=new student();
    stu4.name="sara";
    stu4.age=80;
    stu4.adress="chagi";

    this.students.push(stu4);

        var stu5=new student();
    stu5.name="turmp";
    stu5.age=70;
    stu5.adress="usa";

    this.students.push(stu5);
  }
  deleteStudentParent(studentToDelete: any){
    this.students = this.students.filter(x => x!= studentToDelete);
  }

}
