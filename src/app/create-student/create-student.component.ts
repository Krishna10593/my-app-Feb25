import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentsService } from '../students.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  id:number=0;

  

constructor(private _studentService:StudentsService, private _router:Router, private _activatedRoute:ActivatedRoute){
  _activatedRoute.params.subscribe(
  (data:any)=>{
    console.log(data.id);
    this.id=data.id;
  },(err:any)=>{
    alert("Internal server error");
  }
  )
  if(this.id){
    _studentService.getStudents(this.id).subscribe(
      (data:any)=>{
        console.log(data);
        this.studentForm.patchValue(data);
      }
    )
  }
}

  createStudent(){
    if(this.id){
      console.log(this.studentForm.value);
      this._studentService.updateStudent(this.id,this.studentForm.value).subscribe(
        (data:any)=>{
          console.log(data);
          this._router.navigateByUrl("/dashboard/students")
        }
      )
    }else{
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
}
