import { CommonModule } from '@angular/common';
import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { Book } from './book';
import { EmployeeComponent } from './employee/employee.component';

import { RouterLink, RouterOutlet } from '@angular/router';
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
  imports: [RouterOutlet, CommonModule, EmployeeComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

  //used to give space between elements: default value is false
  preserveWhitespaces: true,

  encapsulation: ViewEncapsulation.ShadowDom,

  viewProviders: [abc, Book]
})


export class AppComponent {
  title = 'myAngularApp';
  cdata: any;

  // constructor(private _abc: abc, private _book: Book) {
  //   console.log("Constructor called");
  //   _abc.show();
  // }



  // getData(val: any) {
  //   this.cdata = val;
  // }


  // //it calls only one method below it
  // @HostListener('click',['$event'])
  // show(){
  //   alert('hello')
  //   console.log('sadfgsdfg')
  // }
}
