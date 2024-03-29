import { CommonModule } from '@angular/common';
import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Book } from './book';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EmployeeComponent } from './employee/employee.component';


class abc {
  constructor() {
    console.log("Contructor abc called!");
  }

  show() {
    console.log("hello world!");
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, EmployeeComponent, RouterLink, DataBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

  //used to give space between elements: default value is false
  preserveWhitespaces: true,

  encapsulation: ViewEncapsulation.ShadowDom,

  viewProviders: [abc, Book]
})


export class AppComponent {
  title = 'myAngularApp';
  myCountry = 'bharat';

  fontSize = 60;
  // cdata: any;

  // isLoggedIn: boolean = false;
  // isvalid = true;

  // num1 = 200;
  // num2 = 200;

  // name = "abhi";

  // employees: any[] = [
  //   { id: 100, name: 'Abhi' },
  //   { id: 101, name: 'Tarun' },
  //   { id: 102, name: 'Amit' },
  //   { id: 103, name: 'Bhushan' },
  //   { id: 104, name: 'Mahesh' },
  //   { id: 105, name: 'Aayush' },
  //   { id: 106, name: 'Vishal' },

  // ]
  employees: any[] = [
    { name: 'Abhi', country: 'India' },
    { name: 'Tarun', country: 'India' },
    { name: 'Amit', country: 'USA' },
    { name: 'Bhushan', country: 'India' },
    { name: 'Mahesh', country: 'China' },
    { name: 'Aayush', country: 'Pakistan' },
    { name: 'Vishal', country: 'Poland' },

  ]

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

  // constructor(private _abc: abc, private _book: Book) {
  //   console.log("Constructor called");
  //   _abc.show();
  // }

  // //it calls only one method below it
  // @HostListener('click',['$event'])
  // show(){
  //   alert('hello')
  //   console.log('sadfgsdfg')
  // }

  // getData(val: any) {
  //   this.cdata = val;
  // }





}
