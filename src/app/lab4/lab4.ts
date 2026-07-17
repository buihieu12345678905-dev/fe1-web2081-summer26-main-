import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
@Component({
  selector: 'app-lab4',
  imports: [ReactiveFormsModule],
  templateUrl: './lab4.html',
  styleUrl: './lab4.css',
})
export class Lab4 {
  addForm: FormGroup
  constructor(private fb: FormBuilder) {
    this.addForm = this.fb.group({
      name:'',
      price:'',
      category: ''
    })
  }

  submitForm(){
    console.log('submitForm');
    
  }
}
