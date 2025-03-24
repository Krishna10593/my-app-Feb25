import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentComponent } from './payment/payment.component';
import { Error404Component } from './error404/error404.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BimComponent } from './bmi/bim.component';
import { LogoutComponent } from './logout/logout.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CelFarnhtComponent } from './cel-farnht/cel-farnht.component';
import { SimpleintComponent } from './simpleint/simpleint.component';
import { EmicalComponent } from './emical/emical.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { AccountsComponent } from './accounts/accounts.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { StudentsComponent } from './students/students.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { AutomobilesComponent } from './automobiles/automobiles.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';


const routes: Routes = [
  {path: "", component:LoginComponent},  //default routing
  {path:"dashboard", component:DashboardComponent, children:
    [{path:"welcome",component:WelcomeComponent},
      {path:"calculator", component:CalculatorComponent},
      {path:"rectangle", component:RectangleComponent},
      {path:"circle", component:CircleComponent},
      {path:"bim", component:BimComponent},
      {path:"logout", component:LogoutComponent},
      {path:"data-binding", component:DataBindingComponent},
      {path:"cel-farnht", component:CelFarnhtComponent},
      {path:"simpleint", component:SimpleintComponent}, 
      {path:"emical", component:EmicalComponent},
      {path:"pinterest", component:PinterestComponent},
      {path:"accounts", component:AccountsComponent},
      {path:"flipkart", component:FlipkartComponent},
      {path:"vehicles", component:VehiclesComponent},
      {path:"create-vehicle", component:CreateVehicleComponent},
      {path:"edit-vehicle/:id", component:CreateVehicleComponent},
      {path:"create-account", component:CreateAccountComponent},
      {path:"students", component:StudentsComponent},
      {path:"create-student", component:CreateStudentComponent},
      {path:"create-user", component:CreateUserComponent},
      {path:"student-form", component:StudentFormComponent},
      {path:"pintrest", component:PinterestComponent},
      {path:"automobiles", component:AutomobilesComponent},
      {path:"vehicle-details/:id", component:VehicleDetailsComponent}
    ]
  },   //Parent routing
  
  {path:"login", component:LoginComponent},
  {path:"payment", component:PaymentComponent},
  {path:"**", component:Error404Component} //wild-card router
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
