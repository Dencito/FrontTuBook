import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  booksData: any;
  constructor(private http: HttpClient) { }

  getBooks = async() => {
    this.http.get("http://107.22.25.39:3000/books")
      .subscribe(data => {
        this.booksData = data;
        console.log(data);
      });

  }

  ngOnInit() {
    this.getBooks();
  }

}
