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

  onAddserver(nameInput:HTMLInputElement,nameContent:HTMLInputElement){
    this.serverCreated.emit({serverName:nameInput.value,serverContent:nameContent.value});

  }
  onAddBluePrint(nameInput:HTMLInputElement,nameContent:HTMLInputElement){
    console.log(nameInput.value)
    this.bluePrintCreated.emit({serverName:nameInput.value,serverContent:nameContent.value});
  }

}
