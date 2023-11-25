import { Component } from '@angular/core';
import { RegisterService } from 'src/app/register.service';

@Component({
  selector: 'app-insta-register',
  templateUrl: './insta-register.component.html',
  styleUrls: ['./insta-register.component.css']
})
export class InstaRegisterComponent {
  email: string = '';
  name: string = '';
  username: string = '';
  password: string = '';

  constructor(private registerService: RegisterService){}

  createAccount(){
    this.registerService.register(this.username, this.email, this.password, 'Instagram');
    //window.location.href = '/Instagram';
  }
}
