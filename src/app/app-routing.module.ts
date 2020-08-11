import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
    { path: '', component: CustomersComponent},
    { path: '**', component: CustomersComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ], //forRoot is called once in an aplication and is used for root Routing module
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}