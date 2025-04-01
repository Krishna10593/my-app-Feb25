import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { UpiComponent } from './upi/upi.component';

const routes: Routes = [
  {path:'card', component:CardsComponent},
  {path:"upi", component:UpiComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
