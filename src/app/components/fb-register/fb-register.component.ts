import { Component } from '@angular/core';
import { RegisterService } from 'src/app/register.service';

@Component({
  selector: 'app-fb-register',
  templateUrl: './fb-register.component.html',
  styleUrls: ['./fb-register.component.css']
})
export class FbRegisterComponent {
  firstname: string = '';
  lastname: string = '';
  email: string = '';

  password: string = '';

  constructor(private registerService: RegisterService){}
  refresh() {
    window.location.href = '/Facebook';
  }

  createAccount(){
    const fullname = `${this.firstname} ${this.lastname}`;

    this.registerService.register(fullname, this.email, this.password, 'Facebook');

    alert('Conta criada com sucesso!')
    this.refresh();
  }
}
