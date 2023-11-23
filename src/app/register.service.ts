import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  async register(username: string, password: string, app: string) {
    try {
      const response = await this.http.post(`${this.baseUrl}/register`, { username, password, app }).toPromise();
      return true;
    } catch (error) {
      return false;
    }
  }
}
