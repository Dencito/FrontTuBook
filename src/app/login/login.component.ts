import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  username: string | any;
  password: string | any;

  constructor(private authService: AuthService) { }

  async login() {
    const userCapture = await this.authService.login(this.username, this.password);
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


}