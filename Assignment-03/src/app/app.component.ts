import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment-03';
  checkButtonClick:boolean=false;
  log:number[]=[];
  OnButtonClick(){
    this.checkButtonClick=!this.checkButtonClick;
    this.log.push(this.log.length+1);
  }
}
