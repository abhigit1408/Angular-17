import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-forms.component.html',
  styleUrl: './template-forms.component.css'
})
export class TemplateFormsComponent {


  onSubmit(regData: NgForm) {
    console.log(regData.value);
    // console.log(regData.value.fname);


  }

}
