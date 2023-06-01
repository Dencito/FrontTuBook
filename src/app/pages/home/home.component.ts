import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  booksData: any;
  searchValue: any = '';
  booksDataCategories: any;
  booksSearch: any;
  user: any = window.localStorage.getItem('user');

  constructor(private http: HttpClient) {}

  getUser = () => {
    const parse = JSON.parse(this.user);
    return parse;
  };
  getBooks = async () => {
    this.http.get('http://107.22.25.39:3000/books').subscribe((data) => {
      this.booksData = Array.isArray(data) && data.sort((a: any, b: any) => a.title.localeCompare(b.title));
      this.booksDataCategories = Array.isArray(data) && data.sort((a: any, b: any) => a.title.localeCompare(b.title));;
    });
  };
  onSearchChange() {
    console.log(this.searchValue);
    this.booksSearch = this.booksData?.filter((item:any) => {
      return item?.title?.toLowerCase().includes(this.searchValue.toLowerCase());
    })
  }

  getBooksCate = (btnValue: any) => {
    this.http.get('http://107.22.25.39:3000/books').subscribe((data) => {
      if(btnValue=="all") {
        this.booksDataCategories = Array.isArray(data) && data.sort((a: any, b: any) => a.title.localeCompare(b.title));;
      } else {
        this.booksDataCategories = Array.isArray(data) && data.sort((a: any, b: any) => a.title.localeCompare(b.title));;
        this.booksDataCategories = this.booksData.filter(
          (book: any) => book.genre == btnValue
        );
      }
      
    });
  };

  ngOnInit() {
    this.getBooks();
  }
}