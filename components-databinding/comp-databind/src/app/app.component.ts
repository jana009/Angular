import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comp-databind';
  serversElement:{type:string,name:string,content:string}[]=[{type:"Server",name:"test server",content:"check values"}];

  onServerAdded(eventData:{serverName:string,serverContent:string}){
    this.serversElement.push({
      type:"Server",
      name:eventData.serverName,
      content:eventData.serverContent
    });

  }
  onBluePrintAdded(eventData:{serverName:string,serverContent:string}){
    this.serversElement.push({
      type:"Blueprint",
      name:eventData.serverName,
      content:eventData.serverContent
    });
  }
}
