import { Injectable } from '@angular/core'
import { Student } from './student'
import 'rxjs/add/operator/toPromise';



import { Http, Headers } from '@angular/http'

@Injectable()
export class StudentService {

    private headers = new Headers({ 'Content-Type': 'application/json' });

    private studentsUrl = 'api/students';

    constructor(private http: Http) { }

    getStudents() {
        return this.http.get(this.studentsUrl)
            .toPromise()
            .then(response => response.json().data as Student[])

    }

    deleteStudent(id: number) {
        const url = `${this.studentsUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null);
    }

    updateStudent(student: Student) {
        console.log("in update");
        const url = `${this.studentsUrl}/${student.id}`;
        return this.http
            .put(url, JSON.stringify(student), { headers: this.headers })
            .toPromise()
            .then(() => student)
    }

    insertStudent(name: string, marks: number) {
        return this.http
            .post(this.studentsUrl, JSON.stringify({ name: name, marks: marks }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as Student)
    }

    getStudent(name : string) {
         return this.http
               .get(`app/students/?name=${name.search}`).toPromise()
               .then((response) =>  response.json().data as Student);
    }
}