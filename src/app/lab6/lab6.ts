import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-story',
  imports: [ReactiveFormsModule],
  templateUrl: './lab6.html',
  styleUrl: './lab6.css',
 
})
export class Lab6 {
  addForm: FormGroup;
  loading = false;
error = '';
success = '';


  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {
    this.addForm = this.fb.group({
      title: '',
      author: '',
  views: 0

      
    });
  }

  submitForm() {
    this.loading = true;
this.error = '';
this.success = '';

    console.log(this.addForm.value);
    this.http
      .post('http://localhost:3000/stories', this.addForm.value)
      .subscribe({
        next: () => {
  this.loading = false;
  this.success = 'Thêm truyện thành công';
  this.addForm.reset();
},

error: () => {
  this.loading = false;
  this.error = 'Có lỗi xảy ra';
},
      });
  }
}