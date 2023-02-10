import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'debug';
  servers:string[]=[];
  onAddserver(){
    this.servers.push("AddServer");
  }
  onRemoveServer(i:number){
    let position=i+0;
   this.servers.splice(position,1);

  }
}
