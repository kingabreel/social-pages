import { Component } from '@angular/core';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent {
  loginName: string = '';
  pass: string = '';

  navigate(){
    if (this.loginName.length > 5 && this.pass.length > 8) {
      console.log(this.loginName)
      console.log(this.pass)
      window.location.href = 'https://www.instagram.com/';
    }
  }
}
