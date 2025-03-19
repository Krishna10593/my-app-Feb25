import { Component } from '@angular/core';

@Component({
  selector: 'app-cel-farnht',
  templateUrl: './cel-farnht.component.html',
  styleUrls: ['./cel-farnht.component.css']
})
export class CelFarnhtComponent {
cel:number=0;
farn:number=0;
farnheat(){
  this.farn=(this.cel*1.8)+32;
  console.log(this.farn);
}

}
