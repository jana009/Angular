import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comp-databind';
  newserverName='';
  newserverContent='';
  serversElement:{type:string,name:string,content:string}[]=[];
  onAddserver(){
    this.serversElement.push({
      type:"Server",
      name:this.newserverName,
      content:this.newserverContent
    });

  }
  onAddBluePrint(){
    this.serversElement.push({
      type:"Blueprint",
      name:this.newserverName,
      content:this.newserverContent
    });
  }
}
