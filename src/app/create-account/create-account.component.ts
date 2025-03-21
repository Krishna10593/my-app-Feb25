import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountsService } from '../accounts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
public accountsForm:FormGroup =new FormGroup({
  account_name: new FormControl(),
  available_balance: new FormControl(),
  account_number: new FormControl(),
  city: new FormControl(),
  ifsc_code: new FormControl()
})

constructor(private _accountService:AccountsService, private _router:Router){}

createAccount(){
  console.log(this.accountsForm.value);
  this._accountService.createAccounts(this.accountsForm.value).subscribe(
  (data:any)=>{
    console.log(data);
    alert("New Account created successfully!");
    this._router.navigateByUrl("/dashboard/accounts");

  },(err:any)=>{
    alert("Internal server error");
  }
  )
}
}
