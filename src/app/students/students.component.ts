import { Component, TemplateRef } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  student:any= [];
  term:string="";
  column:string="";
  order:string="";
  limit:string="";
  page:string="";
  id:string="";

  constructor(private _studentService:StudentsService) {
   this.loadStudent();
  }

  filter(){
    this._studentService.getfilteredStudent(this.term).subscribe(
      (data:any)=>{
        console.log(data);
        this.student=data;
      },(err:any)=>{
        alert("Internal server error");
      }
    )
  }
  sort(){
    this._studentService.getSortedStudent(this.column,this.order).subscribe(
      (data:any)=>{
        console.log(data);
        this.student=data;
      },(err:any)=>{
        alert("Internal server error");
      }
    )
  }
  pagination(){
    this._studentService.getPaginatedStudent(this.limit,this.page).subscribe(
      (data:any)=>{
        console.log(data);
        this.student=data;
      },(err:any)=>{
        alert("Internal server error");
      }
    )
  }

  loadStudent(){
    this._studentService.getStudent().subscribe(
      (data:any)=>{
        console.log(data);
        this.student=data;
      },(err:any)=>{
        alert("Internal server error");
      }
    )
  }
  delete(id:any){
    if(confirm("Are you sure wanted to delete?")==true){
    this._studentService.deleteStudent(id).subscribe(
      (data:any)=>{
        alert("You have successfully deleted the record");
        this.loadStudent();
      },(err:any)=>{
      alert("Internal server error");
      }
    
    )
  }else{
      alert("You have cancelled");
  }
  }
}
