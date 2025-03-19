import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
  accounts:any=[];
  constructor(private _accountService:AccountsService){
    _accountService.getAccounts().subscribe(
      (data:any)=>{
        console.log(data);
        this.accounts=data;
      },(err:any)=>{
        alert("Internal server error")
      }
      )

    
  }

}
