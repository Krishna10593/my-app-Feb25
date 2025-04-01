import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
import { WeatherComponent } from './weather/weather.component';
import { AuthenticationGuard } from './authentication.guard';
import { ViewStudentComponent } from './view-student/view-student.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { ParentComponent } from './parent/parent.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { EmployeedataComponent } from './employeedata/employeedata.component';
import { AboutCeoComponent } from './about-us/about-ceo/about-ceo.component';


const routes: Routes = [
  {path: "", component:LoginComponent},  //default routing
  {path:"dashboard", component:DashboardComponent, canActivate:[AuthenticationGuard], children:
    [{path:"welcome",component:WelcomeComponent},
      {path:"calculator", component:CalculatorComponent},
      {path:"rectangle", component:RectangleComponent},
      {path:"circle", component:CircleComponent},
      {path:"bim", component:BimComponent},
      // {path:"logout", component:LogoutComponent},
      {path:"data-binding", component:DataBindingComponent},
      {path:"cel-farnht", component:CelFarnhtComponent},
      {path:"simpleint", component:SimpleintComponent}, 
      {path:"emical", component:EmicalComponent},
      {path:"pinterest", component:PinterestComponent},
      {path:"accounts", component:AccountsComponent},
      {path:"flipkart", component:FlipkartComponent},
      {path:"vehicles", component:VehiclesComponent, canActivate:[AuthenticationGuard]},
      {path:"create-vehicle", component:CreateVehicleComponent},
      {path:"edit-vehicle/:id", component:CreateVehicleComponent},  //here we are reusing the create-vehicle method to editvehicle and create-vehicle
      {path:"create-account", component:CreateAccountComponent},
      {path:"students", component:StudentsComponent},
      {path:"create-student", component:CreateStudentComponent},
      {path: "edit-student/:id", component:CreateStudentComponent},
      {path:"create-user", component:CreateUserComponent},
      {path:"student-form", component:StudentFormComponent},
      {path:"pintrest", component:PinterestComponent},
      {path:"automobiles", component:AutomobilesComponent},
      {path:"vehicle-details/:id", component:VehicleDetailsComponent},
      {path: "weather", component:WeatherComponent},
      {path:"student-details/:id", component:ViewStudentComponent},
      {path:"sibling1", component:Sibling1Component},
      {path:"parent", component:ParentComponent},
      {path:"textarea", component:TextAreaComponent},
      {path:"Employeedata", component:EmployeedataComponent},
      {path:"about-ceo", component:AboutCeoComponent},
      {path: 'payments',
        loadChildren: () =>import('./payments/payments.module').then(m=> m.PaymentsModule)
      }
      
    ]
  },   //Parent routing
  
  {path:"login", component:LoginComponent},
  {path:"logout", component:LogoutComponent},
  {path:"payment", component:PaymentComponent},
  {path:"**", component:Error404Component} //wild-card router
];


export class AppRoutingModule { }
