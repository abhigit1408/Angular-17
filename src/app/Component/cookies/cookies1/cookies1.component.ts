import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Cookies2Component } from '../cookies2/cookies2.component';

@Component({
  selector: 'app-cookies1',
  standalone: true,
  imports: [Cookies2Component],
  templateUrl: './cookies1.component.html',
  styleUrl: './cookies1.component.css'
})
export class Cookies1Component {
  constructor(private _cookie: CookieService) {
    _cookie.set('UserId', 'Abhi001');
  }

  setdata() {
    this._cookie.set("Name", "Abhishek");
  }
}
