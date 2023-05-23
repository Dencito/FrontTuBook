import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-book',
  templateUrl: './item-book.component.html',
  styleUrls: ['./item-book.component.css']
})
export class ItemBookComponent {
  @Input() book: any;

}
