import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Student } from './Student';



@Injectable()
export class StudentSearchService {
    constructor(private http: Http) { }
    search(term: string): Observable<Student[]> {
        console.log("in StudentSearchService!!!!!!!!!!!!!!!!");
        return this.http
            .get(`app/students/?name=${term}`)
            .map(response => response.json().data as Student[]);
    }
}