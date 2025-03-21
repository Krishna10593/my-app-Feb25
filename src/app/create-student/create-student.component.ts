import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentsService } from '../students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  public studentForm:FormGroup= new FormGroup({
    name:new FormControl,
    phone:new FormControl,
    city:new FormControl,
    email:new FormControl,
    dob:new FormControl,
    school_name:new FormControl,
  
  })
  

constructor(private _studentService:StudentsService, private _router:Router){}

  createStudent(){
    console.log(this.studentForm.value);
    this._studentService.createStudent(this.studentForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        alert("New Vehicle is created successfully");
        this._router.navigateByUrl("/dashboard/students");
      },(err:any)=>{
        alert("Internal server error");
      }
    )
  }
}

