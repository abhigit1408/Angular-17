import { Component, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',

  // inputs: ['Pdata']
  outputs: ['childevent']

})
export class EmployeeComponent {

  // Pdata: any;


  childevent = new EventEmitter();
  sendData(val: any) {
    this.childevent.emit(val);

  }
}
