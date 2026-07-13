import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
@Component({
  selector: 'app-app-story',
  imports: [ReactiveFormsModule],
  templateUrl: './app-story.html',
  styleUrl: './app-story.css',
})
export class AppStory {
  addForm: FormGroup
  constructor(private fb: FormBuilder) {
    this.addForm = this.fb.group({
      title: ''
    })
  }

  submitForm(){
    console.log('submitForm');
    
  }
}
