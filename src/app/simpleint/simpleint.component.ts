import { Component } from '@angular/core';

@Component({
  selector: 'app-simpleint',
  templateUrl: './simpleint.component.html',
  styleUrls: ['./simpleint.component.css']
})
export class SimpleintComponent {
 princple:number=0;
 time:number=0;
 rate:number=0;
 simplint:number=0;

 simpleintrst(){
  this.simplint=(this.princple*this.time*this.rate)/100;
  console.log(this.simplint);
 }

}
