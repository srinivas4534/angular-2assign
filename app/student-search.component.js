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
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/observable/of");
require("rxjs/add/operator/switchmap");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var student_search_service_1 = require("./student-search.service");
var student_component_1 = require("./student.component");
var StudentSearchComponent = (function () {
    function StudentSearchComponent(studentSearchService, router, studentComponent) {
        this.studentSearchService = studentSearchService;
        this.router = router;
        this.studentComponent = studentComponent;
        this.searchTerms = new Subject_1.Subject();
    }
    StudentSearchComponent.prototype.search = function (term) {
        console.log("in search");
        this.searchTerms.next(term);
        console.log("in after searchStudent");
    };
    StudentSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("in ng On Init");
        this.students = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (term) { return term
            ? _this.studentSearchService.search(term)
            : Observable_1.Observable.of([]); });
    };
    StudentSearchComponent.prototype.editStudent = function (student) {
        this.searchField = null;
        this.studentComponent.onUpdate(student);
    };
    StudentSearchComponent.prototype.onChangeStudent = function (studentName) {
        var _this = this;
        this.studentSearchService.search(studentName).toPromise().then(function (res) {
            _this.student = res;
            _this.editStudent(_this.student[0]);
        });
    };
    return StudentSearchComponent;
}());
StudentSearchComponent = __decorate([
    core_1.Component({
        selector: 'student-search',
        templateUrl: './student-search.component.html',
        styleUrls: ['./student-search.component.css'],
        providers: [student_search_service_1.StudentSearchService]
    }),
    __metadata("design:paramtypes", [student_search_service_1.StudentSearchService,
        router_1.Router,
        student_component_1.StudentComponent])
], StudentSearchComponent);
exports.StudentSearchComponent = StudentSearchComponent;
//# sourceMappingURL=student-search.component.js.map