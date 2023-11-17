import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  imgLink: string = '';
  @Input()
  title: string = '';

  constructor() {
    this.goToEndPoint = this.goToEndPoint.bind(this);
  }

  goToEndPoint(){
    window.location.href = '/' + this.title;
  }
}
