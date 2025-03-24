import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
public studentForm:FormGroup=new FormGroup({
  name:new FormControl(),
  class:new FormControl(),
  fathername:new FormControl(),
  email:new FormControl(),
  dob:new FormControl(),
  address:new FormGroup({
    addressline:new FormControl(),
    city:new FormControl(),
    state:new FormControl(),
    pincode:new FormControl()
}),
type:new FormControl(),
// busFee:new FormControl(),
// hostelFee:new FormControl()
marks:new FormArray([]),
})

submit(){
  console.log(this.studentForm.value);
}
constructor(){
  this.studentForm.get('type')?.valueChanges.subscribe(
    (data:any)=>{
      if(data=='dayScholar'){
        this.studentForm.addControl('busFee',new FormControl());
        this.studentForm.removeControl('hostelFee');
      }else{
        this.studentForm.addControl('hostelFee',new FormControl());
        this.studentForm.removeControl('busFee');
      }
    }
  )
}
get marksFormArray(){
  return this.studentForm.get('marks') as FormArray;
}

addMark(){
this.marksFormArray.push(
  new FormGroup({
    class:new FormControl(),
    year:new FormControl(),
    percentage:new FormControl()

  })
)
}
deletemark(i:number){
  this.marksFormArray.removeAt(i);
  console.log("mark removed successfully");
}
}
