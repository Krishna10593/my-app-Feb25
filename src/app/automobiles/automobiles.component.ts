import { Component } from '@angular/core';
import { AutomobilesService } from '../automobiles.service';

@Component({
  selector: 'app-automobiles',
  templateUrl: './automobiles.component.html',
  styleUrls: ['./automobiles.component.css']
})
export class AutomobilesComponent {
vehicles:any=[];
term:string="";
column:string="";
order:string="";
limit:string="";
page:string="";
id:string="";

constructor(private _automobileService:AutomobilesService){
  this.loadVehicle();
}
filter(){
  this._automobileService.getFilteredAutomobiles(this.term).subscribe(
    (data:any)=>{
      console.log(data);
      this.vehicles=data;
    },(err:any)=>{
      alert("Internal server error");
    }
  )
}
sort(){
  this._automobileService.getSortedAutomobiles(this.column,this.order).subscribe(
  (data:any)=>{
    console.log(data);
    this.vehicles=data;
  },(err:any)=>{
    alert("Internal server error");
  }
  )
}

pagination(){
  this._automobileService.getPaginatedAutomobiles(this.limit,this.page).subscribe(
    (data:any)=>{
      console.log(data);
      this.vehicles=data;
    },(err:any)=>{
      alert("Internal server error");
    }
  )
}
loadVehicle(){
  this._automobileService.getAutomobiles().subscribe(
    (data:any)=>{
      console.log(data);
      this.vehicles=data;
    },(err:any)=>{
      alert("Internal server error");
    }
  )
}
delete(id:any){
  if(confirm("Are you sure wanted to delete???")==true){
  this._automobileService.deleteAutomobiles(id).subscribe(
    (data:any)=>{
      alert("Record deleted successfully");
      this.loadVehicle();
    },(err:any)=>{
      alert("Internal server error");
    }
  )
}else{
  alert("You have cancelled");
}
}
}
