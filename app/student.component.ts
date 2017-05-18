import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { StudentService } from './student.service';
import { Student } from './student';

@Component({
  selector: 'student-component',
  templateUrl: './student.component.html',
  styleUrls :['./student.component.css']
})
export class StudentComponent implements OnInit {

    students : Student[] = [];

    name : string;
    marks : number;
    id  : number;
    updateFlag : boolean;

    saveSuccess : boolean = false;
    i : number = 0;

    constructor( private studentService : StudentService ) {

    }

    ngOnInit() {
        this.getStudents();
    }

    getStudents() {
        this.studentService.getStudents().then(resStudents => this.students = resStudents);
    }

    saveStudent(values : any) {
        this.saveSuccess = true;
        if(!this.updateFlag) {
            this.studentService.insertStudent(values.name,values.marks).then(student => this.students.push(student));
        }
        else {
            console.log(values.name);
             this.studentService.updateStudent(values)
                .then(() =>{
                    this.updateFlag = false;
                    this.getStudents();
                });
        }

        this.id  = null;
        this.marks = null;
        this.name = null;
        console.log(this.saveSuccess);
        // while(this.i != 1000) {
        //     console.log("in while");
        //     this.i++;
        // }
        // this.i = 0;
        // this.saveSuccess = false;
        // console.log(this.saveSuccess);
    }

    onDelete(student : Student) {
        console.log(student.id+"delete");
        this.studentService.deleteStudent(student.id).then(() =>
            {this.students = this.students.filter(h => h !== student)});
    }

    onUpdate(student : Student) {
        this.updateFlag = true;
        this.name = student.name;
        this.marks = student.marks;
        this.id = student.id;
    }

    searchStudent(name : string) {
        this.studentService.getStudent(name).then((response) => {
            this.name = response[0].name;
            this.id = response[0].id;
            this.marks = response[0].marks;
        });
    }
}
