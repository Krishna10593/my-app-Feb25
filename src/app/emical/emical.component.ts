import { Component } from '@angular/core';

@Component({
  selector: 'app-emical',
  templateUrl: './emical.component.html',
  styleUrls: ['./emical.component.css']
})
export class EmicalComponent {
principle:number=0;
rate:number=0;
nop:number=0;
emi:number=0;

emical(){
  this.emi=(this.principle*this.rate*(1+this.rate)**this.nop)/(((1+this.rate)**this.nop)-1);
  console.log(this.emi);
}
}
