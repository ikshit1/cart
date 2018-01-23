import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public showValue:number=0;

  onNotifyClicked(message:number):void{
    this.showValue = message;
  }
}
