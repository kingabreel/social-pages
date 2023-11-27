import { Component } from '@angular/core';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent {
  loginName: string = '';
  pass: string = '';
  
  registerView: boolean = false;

  navigate(){
    if (this.loginName.length > 5 && this.pass.length > 8) {
      console.log(this.loginName)
      console.log(this.pass)
      window.location.href = 'https://www.facebook.com/';
    }
  }
}
