import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {
  num1: number=0;
  num2:number=0;
  areares:number=0;
  perimeterres:number=0;

  area(){
    this.areares=this.num1*this.num2;
    console.log(this.areares);
  }

  perimeter(){
    this.perimeterres=2*(this.num1+this.num2);
    console.log(this.perimeterres);
  }
}
