import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CelFarnhtComponent } from './cel-farnht/cel-farnht.component';
import { SimpleintComponent } from './simpleint/simpleint.component';
import { EmicalComponent } from './emical/emical.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { HttpClientModule} from '@angular/common/http';
import { AccountsComponent } from './accounts/accounts.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { StudentsComponent } from './students/students.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { PintrestComponent } from './pintrest/pintrest.component';
import { AutomobilesComponent } from './automobiles/automobiles.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PaymentComponent,
    Error404Component,
    WelcomeComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BimComponent,
    LogoutComponent,
    DataBindingComponent,
    CelFarnhtComponent,
    SimpleintComponent,
    EmicalComponent,
    PinterestComponent,
    AccountsComponent,
    FlipkartComponent,
    VehiclesComponent,
    CreateVehicleComponent,
    CreateAccountComponent,
    StudentsComponent,
    CreateStudentComponent,
    CreateUserComponent,
    StudentFormComponent,
    PintrestComponent,
    AutomobilesComponent,
    VehicleDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
