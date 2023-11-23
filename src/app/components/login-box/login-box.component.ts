import { Component, Input } from '@angular/core';
import { RegisterService } from 'src/app/register.service';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css', './register-box.component.css'],
  providers: [RegisterService]
})
export class LoginBoxComponent {
  @Input()
  imageLink: string = ''; 
  userMail: string = '';
  emailScreen: boolean = true;
  passwordScreen: boolean = false;
  checkBoxValue: boolean = false;

  loginView: boolean = false;
  step: number = 0;

  username: string = '';
  userSurName: string = '';
  password: string = '';

  emails: string[] = [];
  checkboxSelectEmail: number = 0;


  createPass: string = '';
  createPassConfirmation: string = '';


  constructor(private registerService: RegisterService) {}

  createAccountWindow(){ 
    this.loginView = true;
    this.step++;
    if (this.step == 3) {
      this.createEmail();
    }
  }
  goToInputPassword(){
    if(this.userMail != '' && this.userMail.length > 10 && this.userMail.endsWith('.com')) {
      this.emailScreen = false;
      this.passwordScreen = true;
    }
  }
  forgetPassword(){
    console.log("pass changed");
  }
  showPass(){
    this.checkBoxValue = this.checkBoxValue == true ? this.checkBoxValue = false : this.checkBoxValue = true;
  }

  navigate(){
    window.location.href = 'https://www.google.com/';
  }

  createEmail(){
    for (let i = 0; i < 3; i++) {
      const n = Math.floor(Math.random() * 9000) + 1000;
      const firstLetter: string = this.username.substring(0, 2);
      const lastLetter: string = this.userSurName.substring(0, 2);
      const gmail: string = "@gmail.com";

      const email = `${firstLetter}${lastLetter}${n}${gmail}`

      this.emails.push(email)
    }
  }

  mailChose(n: number) {
    this.checkboxSelectEmail = n;
  }

  verifyPass(){
    if (this.createPass == this.createPassConfirmation){
      this.password = this.createPass;
    }
  }

  createAccount(){
    const username = `${this.username} ${this.userSurName}`
    const password = this.password;
    const app = 'Google';

    this.registerService.register(username, password, app);
    this.step = 0;
    this.loginView = false;
    alert('Conta criada com sucesso!');
  }
}
