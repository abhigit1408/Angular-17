import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  Form: any;
  imgUrl: any = [];
  imgName: any = [];
  newImgArray: any[] = [];
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder) {
    this.Form = this.formBuilder.group({
      photo: [''],
    });
  }

  hasDoubleExtension(fileName: string): boolean {
    const regex = /\.[^.]+\.[^.]+$/;
    return regex.test(fileName);
  }

  containsNullByte(fileName: string): boolean {
    return fileName.indexOf('%0') !== -1;
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const selectedFiles = input.files ? Array.from(input.files) : [];

    for (const file of selectedFiles) {
      const { name, size } = file;
      if (size > 100 * 1024 || size < 20 * 1024) {
        alert(`File size of "${name}" is not within the allowed range. Rejected.`);
        input.value = '';
        return;
      }
      if (this.hasDoubleExtension(name) || this.containsNullByte(name)) {
        alert(`File name "${name}" contains a double extension or null byte. Rejected.`);
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result;
        if (result) {
          this.imgUrl.push(result);
          this.imgName.push(name);
        }
      };
      reader.readAsDataURL(file);
    }
  }

  // Inside the DashboardComponent class
  isImageUploaded(imgUrl: string): boolean {
    return this.newImgArray.some(img => img.imgUrl === imgUrl);
  }

  onImageSelected(index: number) {
    this.newImgArray.push({
      imgUrl: this.imgUrl[index],
      imgName: this.imgName[index]
    });
    console.log(this.newImgArray);
  }
}
