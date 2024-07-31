import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StaffDetail } from '../../Model/StaffDetail';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  form4: FormGroup;
  form4_staff: FormGroup = this.formBuilder.group({});
  staffDetail: StaffDetail = new StaffDetail();
  staffDetails: StaffDetail[] = [];
  maxDate: Date = new Date();
  minDate: Date = new Date();

  constructor(
    private formBuilder: FormBuilder,
  ) {

    this.form4 = this.formBuilder.group({
      applicationNo: [""],
      classRoomsNo: [""],
      classRoomsSize: [""],
      classRoomsTotalArea: [""],
      staffRoomsNo: [""],
      staffRoomsSize: [""],
      staffRoomsArea: [""],
      compositeSchLabNO: [""],
      compositeSchLabSize: [""],
      compositeSchTotalArea: [""],
      physicsLabNo: [""],
      physicsLabSize: [""],
      physicsLabTotalArea: [""],
      chemistryLabNo: [""],
      chemistryLabSize: [""],
      chemistryLabTotalArea: [""],
      biologyLabNo: [""],
      biologyLabSize: [""],
      biologyLabTotalArea: [""],
      mathematicsLabNo: [""],
      mathematicsLabSize: [""],
      mathematicsLabTotalArea: [""],
      computerLabNo: [""],
      computerLabSize: [""],
      computerLabTotalArea: [""],
      libraryNo: [""],
      librarySize: [""],
      libraryTotalArea: [""],
      artAndCraftRoomNo: [""],
      artAndCraftRoomSize: [""],
      artAndCraftRoomSTotalArea: [""],
      wellnessRoomNo: [""],
      wellnessRoomSize: [""],
      wellnessRoomTotalArea: [""],
      toiletsBoysNo: [""],
      toiletsBoysSize: [""],
      toiletsBoysTotalArea: [""],
      toiletsGirlsNo: [""],
      toiletsGirlsSize: [""],
      toiletsGirlsTotalArea: [""],
      musicRoomNo: [""],
      musicRoomSize: [""],
      musicRoomTotalArea: [""],
      homeScienceLabNo: [""],
      homeScienceLabSize: [""],
      homeScienceLabTotalArea: [""],
      geographyLabNo: [""],
      geographyLabSize: [""],
      geographyLabTotalArea: [""],
      languageLabNo: [""],
      languageLabSize: [""],
      languageLabTotalArea: [""],
      otherRoomsNo: [""],
      otherRoomsSize: [""],
      otherRoomsTotalRoom: [""],
      specialeducator: [""],
      sportsTeacher: [""],
      careerCounsellor: [""],
      serviceRules: ["", Validators.required],
      pFdetails: [""],
      fileServiceRules: [""],
      payingSalary: ["", Validators.required],
      electronicClearing: ["", Validators.required],
    });

  }
  createForm() {
    this.form4_staff = this.formBuilder.group({
      staffName: [""],
      staffF_SName: [""],
      staffDob: [""],
      staffDateOfAppointment: [""],
      staffDateOfConfirm: [""],
      staffEduQual: [""],
      staffProQual: [""],
      staffDesignation: [""],
      staffClassTaught: [""],
      staffSubjentTaught: [""],
      staffSalary: [""]
    })
  }


}
