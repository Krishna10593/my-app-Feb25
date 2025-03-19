import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  //event binding
click(){
  alert("Hiiiii");
}
submit(){
  alert("Helooooooo");
}


// interpolation

age:number=45;
name:string="sagar";

//property binding

isData:boolean=true;

//two way binding

mobile:string="+91";

//calculator
num1: number=0;
num2:number=0;
result:number=0;

add(){
  this.result=this.num1+this.num2;
  console.log(this.result);
}
}

