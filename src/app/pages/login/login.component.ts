import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  email: string | any;
  password: string | any;
  pathWindow: string = document.location.pathname
  user: any = window.localStorage.getItem('user');

  getUser = () => {
    const parse = JSON.parse(this.user)
    return parse
  }

  constructor(private authService: AuthService) { }
  
  async login() {
    const userCapture = await this.authService.login(this.email, this.password);
    if (!userCapture.error) {
      window.localStorage.setItem('user', JSON.stringify(userCapture));
      console.log('Inicio de sesión exitoso', userCapture);
      Swal.fire({
        icon: 'success',
        title: 'Success Login',
        text: 'Welcome '+ userCapture.username,
      })
      window.location.replace("")
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Failed Login',
      })

    }
  }
  ngOnInit() {
    if(this.pathWindow === "/login") {
      this.getUser()?.email ? window.location.replace(""): "sin logear"
    }
  }


}