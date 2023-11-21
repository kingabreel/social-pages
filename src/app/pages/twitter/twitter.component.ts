import { Component } from '@angular/core';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent {
  loginWindow: boolean = false;
  passWindow: boolean = false;
  username: string = '';
  
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
}
