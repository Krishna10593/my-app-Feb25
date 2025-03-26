import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent {
id:number=0;
students:any=0;

constructor(private _activatedRoute:ActivatedRoute, _studentService:StudentsService){
  _activatedRoute.params.subscribe(
    (data:any)=>{
      console.log(data.id);
      this.id=data.id;
      console.log(this.id);
    },(err:any)=>{
      alert("Internal server error");
    }
  )
  _studentService.getStudents(this.id).subscribe(
    (data:any)=>{
      console.log(data);
      this.students=data;

    },(err:any)=>{
      alert("Data not recieved");
    }
  )
  }
}

