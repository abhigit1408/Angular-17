import { Component } from '@angular/core';
import { NumlistService } from '../Service/numlist.service';

@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css',
  // providers: [NumlistService]

})
export class Comp2Component {
  list1: number[] = [];
  local: any;
  comData: any;



  constructor(private _numlist: NumlistService) {

    this.list1 = _numlist.getlist();
  }
  addnumber(val: any) {
    this._numlist.addnum(val);
    this.list1 = this._numlist.getlist();
  }


  getData() {
    this.local = localStorage.getItem('empcode')?.toString();
    console.log(localStorage.getItem('compData'));
  }

  deleteData() {
    localStorage.removeItem('empcode');
  }
  deleteAll() {
    localStorage.clear();
  }
}
