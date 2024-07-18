import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MessageService } from './Service/message.service';
import { Book } from './book';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EmployeeComponent } from './employee/employee.component';
import { PipeComponent } from './pipe/pipe.component';
import { PracticeComponent } from './practice/practice.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';


class abc {
  constructor() {
    // sessionStorage.setItem('login', 'false');
    console.log("Contructor abc called!");
  }

  show() {
    console.log("hello world!");
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, EmployeeComponent, RouterLink, RouterLinkActive, DataBindingComponent,
    PipeComponent, TwoWayDataBindingComponent, PracticeComponent, HttpClientModule, Comp1Component, Comp2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

  //used to give space between elements: default value is false
  preserveWhitespaces: true,

  encapsulation: ViewEncapsulation.None,
  // providers: [MessageService]
  // viewProviders: [abc, Book]
})


export class AppComponent {
  title = 'myAngularApp';
  myCountry = 'bharat';

  fontSize = 60;
  c: any;

  _msg: string = "";

  classToApply = "active home";

  // cdata: any;

  // isLoggedIn: boolean = false;
  // isvalid = true;

  // num1 = 200;
  // num2 = 200;

  // name = "abhi";

  employees: any[] = [{
    "id": 1,
    "first_name": "Abramo",
    "last_name": "Bezley",
    "email": "abezley0@joomla.org",
    "gender": "Bigender"
  }, {
    "id": 2,
    "first_name": "Brock",
    "last_name": "Earlam",
    "email": "bearlam1@fc2.com",
    "gender": "Male"
  }, {
    "id": 3,
    "first_name": "Carla",
    "last_name": "Kretchmer",
    "email": "ckretchmer2@ibm.com",
    "gender": "Female"
  }, {
    "id": 4,
    "first_name": "Skelly",
    "last_name": "Trathen",
    "email": "strathen3@purevolume.com",
    "gender": "Male"
  }, {
    "id": 5,
    "first_name": "Bobbi",
    "last_name": "Fleury",
    "email": "bfleury4@archive.org",
    "gender": "Polygender"
  }]
  // employees: any[] = [
  //   { name: 'Abhi', country: 'India' },
  //   { name: 'Tarun', country: 'India' },
  //   { name: 'Amit', country: 'USA' },
  //   { name: 'Bhushan', country: 'India' },
  //   { name: 'Mahesh', country: 'China' },
  //   { name: 'Aayush', country: 'Pakistan' },
  //   { name: 'Vishal', country: 'Poland' },

  // ]

  getClass() {
    return "active home";
  }

  getColor(country: any) {
    switch (country) {
      case 'India': return 'blue';
      case 'USA': return 'red';
      case 'China': return 'pink';
      case 'Pakistan': return 'gold';
      case 'Poland': return 'green';
    }
    return null;
  }

  //employees: any;


  // Login() {
  //   this.isLoggedIn = true;
  // }

  // LogOut() {
  //   this.isLoggedIn = false;
  // }

  // onChange(val: any) {
  //   this.isvalid = val;
  // }

  constructor(private _messageService: MessageService) {
    // console.log("Constructor called");
    // _abc.show();
  }

  getmessage() {
    this._msg = this._messageService.getmessage();

  }

  // //it calls only one method below it
  // @HostListener('click',['$event'])
  // show(){
  //   alert('hello')
  //   console.log('sadfgsdfg')
  // }

  // getData(val: any) {
  //   this.cdata = val;
  // }

  currentPage = 1;
  itemsPerPage = 10;
  totalItems = this.employees.length;

  // Method to calculate total pages
  get totalPages() {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  // Method to change the current page
  changePage(newPage: number) {
    if (newPage < 1 || newPage > this.totalPages) {
      return;
    }
    this.currentPage = newPage;
  }

  // Method to get employees for the current page
  getEmployeesForCurrentPage() {
    debugger;
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.employees.slice(startIndex, endIndex);
  }

  logout() {
    // sessionStorage.removeItem('login');
  }

}
