import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private route: Router) {

  }

  login(userid: any, password: any) {
    if (userid == 'admin' && password == 'admin') {
      sessionStorage.setItem('login', 'true');
    } else {
      sessionStorage.setItem('login', 'false');
    }
  }
  register() {
    this.route.navigate(['register']);
  }
}
