import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
interface Story {
  id: number;
  title: string;
  author: string;
  views: number;
}
@Component({
  selector: 'app-lab5',
  imports: [],
  templateUrl: './lab5.html',
  styleUrl: './lab5.css',
})
export class Lab5 {

  stories: Story[] = [];

  // httpClient ~ axios
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Story[]>('http://localhost:3000/stories').subscribe({
      next: (data) => {
        console.log(data);
        this.stories = data;
      },
      error: () => {
        console.log('error');
      },
    });
  }

  
  deleteStory(id: number) {
    console.log(id);
    
    if (!confirm('Xoa ko')) return;

    this.http.delete(`http://localhost:3000/stories/${id}`).subscribe({
      next: () => {
     
        this.stories = this.stories.filter((story) => story.id !== id);
      },
      error: () => {
        console.log('error');
      },
    });
  }
}

