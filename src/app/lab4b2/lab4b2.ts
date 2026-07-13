import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
@Component({
  selector: 'app-lab4b2',
  imports: [],
  templateUrl: './lab4b2.html',
  styleUrl: './lab4b2.css',
})
export class Lab4b2 {
  addForm: FormGroup
  constructor(private fb: FormBuilder) {
    this.addForm = this.fb.group({
      username:'',
      email:'',
      password:''
    })
  }

  submitForm(){
    console.log('submitForm');
    
  }
}
