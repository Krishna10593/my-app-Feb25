import { Component } from '@angular/core';
import { PintrestService } from '../pintrest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private _router:Router){}
  logout(){
    sessionStorage.removeItem("token");
    this._router.navigateByUrl("/login");
  }
}
