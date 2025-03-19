import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
num:number=0;
cirarea:number=0;
cirperimeter:number=0;

area(){
  this.cirarea=3.14*(this.num**2);
  console.log(this.cirarea);
}
perimeter(){
  this.cirperimeter=2*3.14*this.num;
  console.log(this.cirperimeter);
}

}
