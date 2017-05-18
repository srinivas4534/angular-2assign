import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let students = [
      {id: 11, name: 'Mr. Nice',marks : '67'},
      {id: 12, name: 'Narco',marks : '76'},
      {id: 13, name: 'Bombasto',marks : '75'},
      {id: 14, name: 'abc',marks : '67'},
      {id: 15, name: 'xyz',marks : '76'},
      {id: 16, name: 'pwr',marks : '75'},
      {id: 17, name: 'qwer',marks : '67'},
      {id: 18, name: 'asdf',marks : '76'},
      {id: 19, name: 'zxc',marks : '75'},
    ];
    return {students};
  }
}