import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
  // encapsulation:ViewEncapsulation.None,
  inputs: ['Pdata']

})
export class EmployeeComponent {

  Pdata: any;
}
