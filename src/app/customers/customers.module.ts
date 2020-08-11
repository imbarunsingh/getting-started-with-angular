import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CustomersListComponent } from './customers-list/customers-list.component';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { FilterTextboxComponent } from './filter-textbox/filter-textbox.component';

@NgModule({
  imports:      [ CommonModule, SharedModule, FormsModule, CustomersRoutingModule],
  declarations: [ CustomersComponent,CustomersListComponent, FilterTextboxComponent],
  exports: [CustomersComponent] // This is like making CustomersComponent public so that it can be used elsewhere 
})
export class CustomersModule { }
