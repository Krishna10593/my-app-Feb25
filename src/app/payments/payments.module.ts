import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { CardsComponent } from './cards/cards.component';
import { UpiComponent } from './upi/upi.component';


@NgModule({
  declarations: [
    CardsComponent,
    UpiComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule
  ]
})
export class PaymentsModule { }
