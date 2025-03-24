import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {

  //Getting the data from the url
  vehicles:any=[];
  term:string="";
  id:string="";
  column:string="";
  order:string="";
  limit:string="";
  page:string="";
 constructor(private _vehicleService:VehiclesService){
 this.loadVehicles();
 
 }

 //Filtering the data
  filter(){
    this._vehicleService.getFilteredVehicles(this.term).subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data;
      },(err:any)=>{
        alert("Internal serer error")
      }
    )
  }
  
 sort(){
  this._vehicleService.getSortedVehicles(this.column,this.order).subscribe(
    (data:any)=>{
      console.log(data);
      this.vehicles=data;
    },(err:any)=>{
      alert("Internal server error");
    }
  )
 }

 loadVehicles(){
  this._vehicleService.getVehicles().subscribe(
    (data:any)=>{
      console.log(data);
      this.vehicles=data;
    },(err:any)=>{
      console.log("Internal server error");
    }
  )
 }
 delete(id:any){
  if(confirm("Are yor sure want to delete?")==true){
this._vehicleService.deleteVehicles(id).subscribe(
  (data:any)=>{
    alert("Record deleted successfully");
    this.loadVehicles();
  },(err:any)=>{
    alert("Internal server error")
  }
)
  }else{
    alert("You have cancelled");
  }
 }
 pagination(){
  this._vehicleService.getPaginatedVehicles(this.limit,this.page).subscribe(
    (data:any)=>{
      console.log(data);
      this.vehicles=data;
    },(err:any)=>{
      alert("Internal server error");
    }
  )
 }

}
