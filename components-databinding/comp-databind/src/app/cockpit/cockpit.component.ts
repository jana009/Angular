import { Component } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {

  newserverName='';
  newserverContent='';

  // onAddserver(){
  //   this.serversElement.push({
  //     type:"Server",
  //     name:this.newserverName,
  //     content:this.newserverContent
  //   });

  // }
  // onAddBluePrint(){
  //   this.serversElement.push({
  //     type:"Blueprint",
  //     name:this.newserverName,
  //     content:this.newserverContent
  //   });
  // }

}
