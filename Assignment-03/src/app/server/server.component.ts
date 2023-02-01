import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  count=0;
  getTimeStamp(){
    console.log(this.count);
    this.count+=1;
    return `${this.count}`;
  }
}
