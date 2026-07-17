import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-app-story',
  imports: [ReactiveFormsModule],
  templateUrl: './app-story.html',
  styleUrl: './app-story.css',
})
export class AddStory {
  addForm: FormGroup
  constructor(private fb: FormBuilder,  private http: HttpClient,) {
    this.addForm = this.fb.group({
      title: '',
      author: '',
      name: '',
      views: ''
    })
  }

  submitForm(){
    console.log(this.addForm.value);
    this.http.post('http://localhost:3000/stories', this.addForm.value)
      .subscribe({
        next: () => {

        },
        error: () => {},
      });
    
  }
}
