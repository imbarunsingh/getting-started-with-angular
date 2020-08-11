import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';

const routes: Routes = [
    { path: 'customers', component: CustomersComponent}    
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ], //child routes
    exports: [ RouterModule ]
})
export class CustomersRoutingModule {

}