import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  booksData: any;
  imgPost: any;
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
  async uploadImage(image: File): Promise<void> {
    const formData: FormData = new FormData();
    formData.append('image', image);
    console.log(image)

    try {
      const response = await this.http.post<any>('http://107.22.25.39:3000/images', formData).toPromise();
      console.log('Image uploaded successfully:', response);
      // Handle the response here
    } catch (error) {
      console.error('Error uploading image:', error);
      // Handle the error here
    }
  }

  handlePost = () => {
    this.uploadImage(this.imgPost);
  }
 */
  ngOnInit() {
    this.getBooksAll();
  }
}