import { Component } from '@angular/core';
import { NumlistService } from '../Service/numlist.service';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css',
  // providers: [NumlistService]
})
export class Comp1Component {
  list1: number[] = [];

  company = {
    name: "abhi",
    city: "noida",
    state: "MP",
    country: "India"
  }

  constructor(private _numlist: NumlistService) {

    this.list1 = _numlist.getlist();
  }
  addnumber(val: any) {
    this._numlist.addnum(val);
    this.list1 = this._numlist.getlist();
  }

  setdata() {
    localStorage.setItem('empcode', '101');
    localStorage.setItem('compData', JSON.stringify(this.company));
  }
}
