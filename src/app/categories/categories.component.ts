import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  booksData: any;
  formData: FormData = new FormData();


  constructor(private http: HttpClient) { }

  getBooksAll = () => {
    this.http.get("http://107.22.25.39:3000/books")
      .subscribe(data => {
        this.booksData = data;
      });
  }

  getBooks = (btnValue: any) => {
    this.http.get("http://107.22.25.39:3000/books")
      .subscribe(data => {
        this.booksData = data;
        this.booksData = this.booksData.filter((book: any) => book.genre == btnValue);
        console.log(this.booksData);
      });
  }
/* 
  onFileChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      this.formData.append('image', file);
      console.log(file)
    }
  }

  async handlePost() {
    try {
      const response = await this.http.post<any>('http://107.22.25.39:3000/images', this.formData).toPromise();
      console.log('Image uploaded successfully:', response);
    } catch (error) {
      console.error('Error uploading image:', error);

    }
  } */

  ngOnInit() {
    this.getBooksAll();
  }
}