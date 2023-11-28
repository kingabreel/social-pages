import { Component } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { RegisterService } from 'src/app/register.service';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent {
  loginWindow: boolean = false;
  passWindow: boolean = false;
  registerWindow: boolean = false;

  username: string = '';
  emailRegister: string = '';
  passwordRegister: string = '';

  emailLogin: string = '';
  passwordLogin: string = '';  

  constructor(private loginService: LoginService, private registerService: RegisterService){}

  changeBackground(){
    return{
      'filter': this.loginWindow ? 'brightness(.3)' : 'brightness(1)',
      'z-index': '-1'
    }
  }

  switchLoginWindow(){
    if(this.loginWindow){
      this.loginWindow = false;
    } else {
      this.loginWindow = true;
    }
  }

  switchPasswordWindow(){
    if(!this.passWindow) {
      this.username = 'gabriel';
      this.passWindow = true;
    } else {
      this.loginWindow = false;
      this.passWindow = false;
    }
  }

  createAccount(){
    this.registerService.register('user', this.emailRegister, this.passwordRegister, 'Twitter');
    alert("Registrado com sucesso!");
    window.location.href = '/Facebook';
  }

  async login(){
    try {
      const response = await this.loginService.login(this.emailLogin, this.passwordLogin)
      .toPromise();
     
      console.log('Response:', response);

      if (response === "Login sucedido!") {
        console.log(response);
        alert('Login Sucedido!');

        window.location.href = 'https://www.twitter.com/';
      } else {
        alert('Login falhou!');
      }
    } catch (error) {
    }
  }
}
