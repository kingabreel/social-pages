import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  async login(usernameOrEmail:string, password:string): Promise<any>{
    return this.http.post(`${this.baseUrl}/login`, { usernameOrEmail, password });
  }
}