import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/customers'},
    { path: '**', pathMatch: 'full', redirectTo: '/customers' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ], //forRoot is called once in an aplication and is used for root Routing module
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}