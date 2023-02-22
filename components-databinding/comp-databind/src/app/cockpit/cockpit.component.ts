import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output() serverCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() bluePrintCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  @ViewChild('serverNameContent',{static:true}) serverContent;

  ngOnInit(){
    console.log(this.serverContent);//returns elementRef
    
  }

  onAddserver(nameInput:HTMLInputElement,nameContent:HTMLInputElement): void{
    console.log("Adding native Element value" +this.serverContent.nativeElement.value);//to get the native element
    this.serverCreated.emit({serverName:nameInput.value,serverContent:nameContent.value});

  }
  onAddBluePrint(nameInput:HTMLInputElement,nameContent:HTMLInputElement){
   // console.log(nameInput.value)
   this.serverContent.nativeElement.value="setting Random value"; // to set the random value
    this.bluePrintCreated.emit({serverName:nameInput.value,serverContent:nameContent.value});
  }

}
