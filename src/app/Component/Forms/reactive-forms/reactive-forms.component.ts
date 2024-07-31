import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReactiveForm } from '../../../Model/ReactiveForm';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css',
  preserveWhitespaces: true
})
export class ReactiveFormsComponent implements OnInit {

  regForm: any;

  reactform: ReactiveForm = new ReactiveForm();
  reactForms: ReactiveForm[] = [];

  constructor(private _fb: FormBuilder,) {

    if (localStorage.getItem('reactForm')) {
      this.reactForms = JSON.parse(localStorage.getItem('reactForm')!);
    }
  }

  ngOnInit() {
    // this.regForm = new FormGroup({
    //   id: new FormControl(),
    //   fname: new FormControl(),
    //   lname: new FormControl(),
    //   email: new FormControl(),
    //   mobileno: new FormControl(),
    // })
    //// Avoid using new keyword
    // this.regForm = this._fb.group({
    //   id: new FormControl(''),
    //   fname: new FormControl(''),
    //   lname: new FormControl(''),
    //   email: new FormControl(''),
    //   mobileno: new FormControl(''),
    // })
    this.regForm = this._fb.group({
      id: [''],
      fname: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      lname: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      mobileno: ['', Validators.compose([Validators.required, Validators.pattern("^[0-9]*$")])],

      // mobilenos: new FormArray([
      //   new FormControl()
      // ])
    })

    //// Value changes in single control only
    // this.regForm.get('fname')?.valueChanges.subscribe(firstName => {
    //   console.log("fname change : " + firstName);
    // });
    // this.regForm.get('lname')?.valueChanges.subscribe(lastname => {
    //   console.log("lname change : " + lastname);
    // });


    //// Value changes in entire form
    // this.regForm.valueChanges.subscribe(formdata => {
    //   console.log("fname change : " + formdata.fname);
    //   console.log("lname change : " + formdata.lname);
    // })

    // this.regForm.get('fname')?.disable();
    // this.regForm.get('fname')?.statusChanges.subscribe((status) => {
    //   console.log("fname status : " + status);
    // })
    // this.regForm.get('lname')?.statusChanges.subscribe((status) => {
    //   console.log("lname status : " + status);
    // })

    // this.regForm.statusChanges.subscribe((status) => {
    //   console.log("form status:" + status);
    // })


    ////Form Array
    // let arr = new FormArray([
    //   new FormControl(),
    //   new FormControl()
    // ]);
    // let arr = new FormArray([
    //   new FormControl('Abhi', Validators.required),
    //   new FormControl('Bamne')
    // ]);

    // console.log(arr.value);
    // console.log(arr.valid);

    // arr.reset();
    // console.log(arr.value);
    // console.log(arr.valid);
  }

  OnSubmit(fromdata: FormGroup) {
    // console.log(this.regForm.value);
    // console.log(this.regForm.valid);

    // console.log(fromdata.get('mobilenos')?.value);
    // // console.log(fromdata.get('email')?.value);

    // // for (let mobileno of fromdata.get('mobilenos')?.value) {
    // //   console.log(mobileno);
    // // };

    this.reactform = fromdata.value;
    this.reactForms.push(this.reactform);
    console.log(this.reactForms);

    localStorage.setItem('reactForm', JSON.stringify(this.reactForms));
  }

  reset() {
    // this.regForm.reset();

    this.regForm.reset({
      fname: this.regForm.get('fname')?.value
    });
  }

  fillData() {
    // this.regForm.setValue({
    //   id: 1,
    //   fname: 'Abhi',
    //   lname: 'Bamne',
    //   email: 'lZyHv@example.com',
    //   mobileno: '1234567890'
    // })
    this.regForm.patchValue({
      // id: 1,
      fname: 'Abhishek',
      lname: 'Bamne',
      email: 'Abhi@example.com',
      // mobilenos: '1234567890',
    })
  }

  addRow() {
    this.regForm.get('mobilenos').push(new FormControl());
  }

  deleteRow(val: any) {
    this.regForm.get('mobilenos').removeAt(val);
  }
}
