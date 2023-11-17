import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css']
})
export class LoginBoxComponent {
@Input()
imageLink: string = ''; 
userMail: string = '';
emailScreen: boolean = true;
passwordScreen: boolean = false;
checkBoxValue: boolean = false;


  createAccount(){ 
    console.log("account created");
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
}
