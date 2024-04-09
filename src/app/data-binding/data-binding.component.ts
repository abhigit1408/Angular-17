import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
  preserveWhitespaces: true
})
export class DataBindingComponent {
  name: any;
  // city = 'Betul';
  // num1: number = 100;
  // num2 = 200;
  // imgPath = '../assets/one.jpg';
  // col = 2;

  // currentValue: boolean = true;

  // company = {
  //   name: 'Abhi',
  //   city: 'Bhopal',
  //   state: 'Mp',
  //   country: 'India'
  // }
  // font = 34;
  // isBold = '1000';

  // classesToApply = 'boldClass italicClass';

  // // company: any;

  // changeCity() {
  //   this.city = 'Bhopal';
  // }

  // enableDisable() {
  //   this.currentValue = !this.currentValue;
  // }


  //Event Binding

  clickMe() {
    console.log('Click me fired..');
  }

  clickMe2() {
    this.name = localStorage.getItem('name');
  }


  keyup(name: any) {
    localStorage.setItem('name', name);
  }
  keydown() {
    console.log('keydown fired..');
  }
}
