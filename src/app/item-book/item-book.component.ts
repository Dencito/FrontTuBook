import { Component, Input } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-item-book',
  templateUrl: './item-book.component.html',
  styleUrls: ['./item-book.component.css']
})
export class ItemBookComponent {
  @Input() book: any;

  openModal = () => {
    console.log(this.book)
    Swal.fire({
      title: `<strong class="pt-5">${this.book.title}</strong>`,
      html: `
        <img src="${this.book.bookCover}" width="100%" alt="">
        <p>${this.book.description}</p>
      `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      cancelButtonText: "hola"
    })
  }
  
}
