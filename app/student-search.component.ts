import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


import 'rxjs/add/observable/of';


import 'rxjs/add/operator/switchmap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { StudentSearchService } from './student-search.service';
import { Student } from './student';
import { StudentComponent } from './student.component'

import {ElementRef} from '@angular/core';



@Component({
    selector: 'student-search',
    templateUrl: './student-search.component.html',
    styleUrls: ['./student-search.component.css'],
    providers: [StudentSearchService]

})
export class StudentSearchComponent implements OnInit {
   
    students: Observable<Student[]>;
    student  : Student[];
    private searchTerms = new Subject<string>();
    constructor(
        private studentSearchService: StudentSearchService,
        private router: Router,
        private studentComponent : StudentComponent) { }

    private searchField : string;
   
    search(term: string): void {
        console.log("in search");
        this.searchTerms.next(term);
        console.log("in after searchStudent");
    }

    ngOnInit(): void {
        console.log("in ng On Init");
        this.students = this.searchTerms
            .debounceTime(300)        
            .distinctUntilChanged()   
            .switchMap(term => term  
                ? this.studentSearchService.search(term)
                : Observable.of<Student[]>([]));
    }

    editStudent(student : Student) {
        this.searchField = null;
        this.studentComponent.onUpdate(student);
    }

    onChangeStudent(studentName : string) {
        this.studentSearchService.search(studentName).toPromise().then(res => {
            this.student = res;
            this.editStudent(this.student[0]);  
        })
    }
}
