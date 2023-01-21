import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allowAppWarning=false;
  serverCreationStatus="No Server is not yet created :("
  title = 'Assignment-01';
  constructor(){
    setTimeout(()=>{
      this.allowAppWarning=true;
    },2000);
    
  }
  onClickAddServer(){
    this.serverCreationStatus="Server Created!";
    console.log(this.serverCreationStatus);
    console.log(this.onClickAddServer);
  }
}
