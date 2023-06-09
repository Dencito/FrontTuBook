import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = 'https://bk48t1027l.execute-api.us-east-1.amazonaws.com/dev/users/login';
  private readonly USER_KEY = 'user';
  private readonly API_URL_REGISTER = 'https://bk48t1027l.execute-api.us-east-1.amazonaws.com/dev/users/register';
  constructor(private http: HttpClient) {}

  isLoggedIn(): boolean {
    return localStorage.getItem(this.USER_KEY) !== null;
  }

  login(email: string, password: string): Promise<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { email: email, password: password };

    return this.http.post<any>(`${this.API_URL}`, body, { headers: headers })
      .toPromise()
      .then(response => {
        /* return response.user; */
        return response
      })
      .catch(error => error);
  }

  register(email: string, password: string): Promise<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { email: email, password: password };

    return this.http.post<any>(`${this.API_URL_REGISTER}`, body, { headers: headers })
      .toPromise()
      .then(response => {
        /* return response.user; */
        return response
      })
      .catch(error => error);
  }
}
