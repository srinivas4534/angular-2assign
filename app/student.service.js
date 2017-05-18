"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/toPromise");
var http_1 = require("@angular/http");
var StudentService = (function () {
    function StudentService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.studentsUrl = 'api/students';
    }
    StudentService.prototype.getStudents = function () {
        return this.http.get(this.studentsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; });
    };
    StudentService.prototype.deleteStudent = function (id) {
        var url = this.studentsUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; });
    };
    StudentService.prototype.updateStudent = function (student) {
        console.log("in update");
        var url = this.studentsUrl + "/" + student.id;
        return this.http
            .put(url, JSON.stringify(student), { headers: this.headers })
            .toPromise()
            .then(function () { return student; });
    };
    StudentService.prototype.insertStudent = function (name, marks) {
        return this.http
            .post(this.studentsUrl, JSON.stringify({ name: name, marks: marks }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; });
    };
    StudentService.prototype.getStudent = function (name) {
        return this.http
            .get("app/students/?name=" + name.search).toPromise()
            .then(function (response) { return response.json().data; });
    };
    return StudentService;
}());
StudentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], StudentService);
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map