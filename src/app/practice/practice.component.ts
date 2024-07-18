import { Component, HostListener } from '@angular/core';


class abc {
  constructor() {
    console.log("Constructor abc called");
  }
}

@Component({
  selector: 'app-practice',
  standalone: true,
  imports: [],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.css',
  viewProviders: [abc]
})
export class PracticeComponent {
  // constructor(_abc: abc) {
  //   console.log("PracticeComponent Constructor called");
  // };

  @HostListener('click', ['$event'])
  show() {
    alert('hello')
    console.log('sadfgsdfg')
  }
}




