import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrdersComponent } from '../orders/orders.component';

//Route with path parameter
const routes: Routes = [
    { path: 'orders/:id', component: OrdersComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],  //child routes
    exports: [ RouterModule ]
})
export class OrdersRoutingModule {

}