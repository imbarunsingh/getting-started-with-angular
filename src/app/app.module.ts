import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CustomersModule } from './customers/customers.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { OrdersModule } from './orders/orders.module';

import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  imports: [
    BrowserModule,
    NgxSpinnerModule,
    CustomersModule,
    SharedModule,
    CoreModule,
    OrdersModule,
    AppRoutingModule],

  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
