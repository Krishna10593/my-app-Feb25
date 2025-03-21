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

  constructor(private _studentService:StudentsService) {
    _studentService.getStudent().subscribe(
      (data:any)=>{
        console.log(data);
        this.student=data;
      },(err:any)=>{
        alert("Internal server error");
      }
    )
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
    
}
