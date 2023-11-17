import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css']
})
export class LoginBoxComponent {
@Input()
imageLink: string = ''; 

createAccount(){ 
  console.log("account created");
}
goToInputPassword(){
  console.log("next page");

}
forgetPassword(){
  console.log("pass changed");
}
}
