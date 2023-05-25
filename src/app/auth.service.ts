import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = 'http://107.22.25.39:3000/users/login';
  private readonly USER_KEY = 'user';

  constructor(private http: HttpClient) {}

  isLoggedIn(): boolean {
    return localStorage.getItem(this.USER_KEY) !== null;
  }

  login(username: string, password: string): Promise<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { email: username, password: password };

    return this.http.post<any>(`${this.API_URL}`, body, { headers: headers })
      .toPromise()
      .then(response => {
        /* return response.user; */
        return response
      })
      .catch(error => error);
  }
}
