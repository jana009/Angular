import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output() serverCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() bluePrintCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  newserverName='';
  newserverContent='';

  onAddserver(){
    this.serverCreated.emit({serverName:this.newserverName,serverContent:this.newserverContent});

  }
  onAddBluePrint(){
    this.bluePrintCreated.emit({serverName:this.newserverName,serverContent:this.newserverContent});
  }

}
