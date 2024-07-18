import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WelcomePipe } from '../welcome.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [CommonModule, WelcomePipe],
  templateUrl: './pipe.component.html',
  template: '<h1>Hello world!</h1>',
  styles: 'p{background-color: red}',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  title = 'Hello World';
  num = 1200000;
  num1 = 2.50;
  currentDate = new Date();

  name = 'abhishek bamne';

  company = {
    name: 'Sahosoft',
    city: 'Noida',
    state: 'UP',
    country: 'India'
  }

  students = [
    { name: 'Abhishek', age: 22, gender: 'Male' },
    { name: 'Bhushan', age: 23, gender: 'Male' },
    { name: 'Tarun', age: 21, gender: 'Male' },
    { name: 'Aayushi', age: 26, gender: 'Female' },
    { name: 'Anjali', age: 24, gender: 'Female' },
    { name: 'Ram', age: 25, gender: 'Male' }
  ]
}
