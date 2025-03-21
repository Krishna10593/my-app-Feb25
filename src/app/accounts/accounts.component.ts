import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
  accounts:any=[];
  term:string="";
  column:string="";
  order:string="";
  limit:string="";
  page:string="";
  constructor(private _accountService:AccountsService){
  this.loadAccounts();
  }
  loadAccounts(){
    this._accountService.getAccounts().subscribe(
      (data:any)=>{
        console.log(data);
        this.accounts=data;
      },(err:any)=>{
        alert("Internal server error")
      }
      )
    }

    
  
  filter(){
   this._accountService.getfilteredAccounts(this.term).subscribe(
    (data:any)=>{
      console.log(data);
      this.accounts=data;
    },(err:any)=>{
      alert("Internal server error");
    }
   )
  }
  sort(){
   this._accountService.getSortedAccounts(this.column,this.order).subscribe(
    (data:any)=>{
      console.log(data);
      this.accounts=data;
    },(err:any)=>{
      alert("Internal server error");
    }
   )
  }
  delete(id:any){
    if(confirm("Are you sure want to delete?")==true){
      this._accountService.deleteAccounts(id).subscribe(
        (data:any)=>{
         alert("Record deleted successfully");
          this.loadAccounts();

        },(err:any)=>{
          alert("Internal server error");
        }
      )
    }else{
      alert("You have cancelled");
    }
  }
  pagination(){
    this._accountService.getPaginatedAccounts(this.limit,this.page).subscribe(
      (data:any)=>{
        console.log(data);
        this.accounts=data;
      },(err:any)=>{
        alert("Internal server error");
      }
    )
  }
}
