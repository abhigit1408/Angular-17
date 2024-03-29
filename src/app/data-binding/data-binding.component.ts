import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  city = 'Betul';
  num1: number = 100;
  num2 = 200;
  imgPath = '../assets/one.jpg';
  col = 2;

  currentValue: boolean = true;

  company = {
    name: 'Abhi',
    city: 'Bhopal',
    state: 'Mp',
    country: 'India'
  }

  // company: any;

  changeCity() {
    this.city = 'Bhopal';
  }

  enableDisable() {
    this.currentValue = !this.currentValue;
  }

}
