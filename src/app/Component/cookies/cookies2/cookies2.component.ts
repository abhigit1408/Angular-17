import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookies2',
  standalone: true,
  imports: [],
  templateUrl: './cookies2.component.html',
  styleUrl: './cookies2.component.css'
})
export class Cookies2Component {
  cookie: string = "";
  constructor(private _cookie: CookieService) {

  }
  getData() {
    this.cookie = this._cookie.get("Name");
  }

  deleteData() {
    this._cookie.delete("Name");
  }

  deleteAllData() {
    this._cookie.deleteAll();
  }
}
