import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  
})
export class LoginComponent {
  
  constructor(private router : Router) {

  }


  login(values : any) {
      console.log(values.userId);
      console.log(values.pwd);
      if(values.userId == "admin" && values.pwd == "admin") {
          this.router.navigate(['/student']);
      }
      else {
          
      }
  }
}
