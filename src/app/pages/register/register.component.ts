import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service'; 
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string | any;
  password: string | any;

  constructor(private authService: AuthService) { }

  async login() {
    const userCapture = await this.authService.login(this.email, this.password);
    if (!userCapture.error) {
      window.localStorage.setItem('user', JSON.stringify(userCapture));
      console.log('Inicio de sesión exitoso', userCapture);
      window.location.replace("")
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Failed Login',
      })

    }
  }
  async register() {
    const userCapture = await this.authService.register(this.email, this.password);
    if (!userCapture.error) {
      console.log('Registro Exitoso', userCapture);
      Swal.fire({
        icon: 'success',
        title: 'Success Register',
        text: 'Welcome '+ userCapture.email,
      })
      this.login()
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Failed Register',
      })

    }
 
  }

  
}
