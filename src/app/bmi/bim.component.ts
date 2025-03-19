import { Component } from '@angular/core';

@Component({
  selector: 'app-bim',
  templateUrl: './bim.component.html',
  styleUrls: ['./bim.component.css']
})
export class BimComponent {
weight:number=0;
height:number=0;
bmi:number=0;

calbmi(){
  this.bmi=this.weight/(this.height**2);
  console.log(this.bmi);
  
}

}
