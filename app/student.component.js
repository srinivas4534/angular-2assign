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
var student_service_1 = require("./student.service");
var StudentComponent = (function () {
    function StudentComponent(studentService) {
        this.studentService = studentService;
        this.students = [];
        this.saveSuccess = false;
        this.i = 0;
    }
    StudentComponent.prototype.ngOnInit = function () {
        this.getStudents();
    };
    StudentComponent.prototype.getStudents = function () {
        var _this = this;
        this.studentService.getStudents().then(function (resStudents) { return _this.students = resStudents; });
    };
    StudentComponent.prototype.saveStudent = function (values) {
        var _this = this;
        this.saveSuccess = true;
        if (!this.updateFlag) {
            this.studentService.insertStudent(values.name, values.marks).then(function (student) { return _this.students.push(student); });
        }
        else {
            console.log(values.name);
            this.studentService.updateStudent(values)
                .then(function () {
                _this.updateFlag = false;
                _this.getStudents();
            });
        }
        this.id = null;
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
    };
    StudentComponent.prototype.onDelete = function (student) {
        var _this = this;
        console.log(student.id + "delete");
        this.studentService.deleteStudent(student.id).then(function () { _this.students = _this.students.filter(function (h) { return h !== student; }); });
    };
    StudentComponent.prototype.onUpdate = function (student) {
        this.updateFlag = true;
        this.name = student.name;
        this.marks = student.marks;
        this.id = student.id;
    };
    StudentComponent.prototype.searchStudent = function (name) {
        var _this = this;
        this.studentService.getStudent(name).then(function (response) {
            _this.name = response[0].name;
            _this.id = response[0].id;
            _this.marks = response[0].marks;
        });
    };
    return StudentComponent;
}());
StudentComponent = __decorate([
    core_1.Component({
        selector: 'student-component',
        templateUrl: './student.component.html',
        styleUrls: ['./student.component.css']
    }),
    __metadata("design:paramtypes", [student_service_1.StudentService])
], StudentComponent);
exports.StudentComponent = StudentComponent;
//# sourceMappingURL=student.component.js.map