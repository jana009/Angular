import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  serverName='';
  serverCheck=false;
  serverStatus='';
  constructor(){
    
  }
  onServerClick(){
    this.serverStatus="Created New Server "+this.serverName;
    this.serverCheck=true;
  }
}
