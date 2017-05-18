"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var students = [
            { id: 11, name: 'Mr. Nice', marks: '67' },
            { id: 12, name: 'Narco', marks: '76' },
            { id: 13, name: 'Bombasto', marks: '75' },
            { id: 14, name: 'abc', marks: '67' },
            { id: 15, name: 'xyz', marks: '76' },
            { id: 16, name: 'pwr', marks: '75' },
            { id: 17, name: 'qwer', marks: '67' },
            { id: 18, name: 'asdf', marks: '76' },
            { id: 19, name: 'zxc', marks: '75' },
        ];
        return { students: students };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map