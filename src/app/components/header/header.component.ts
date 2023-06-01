import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user: any = window.localStorage.getItem('user');

  getUser = () => {
    const parse = JSON.parse(this.user)
    return parse
  }

  logOut =()=> {
    window.localStorage.removeItem('user');
    window.location.replace("/login")
  }

}
