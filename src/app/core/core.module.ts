import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from './data.service';
import { SorterService } from './sorter.service';

@NgModule({
    imports: [ HttpClientModule ], // For HTTP call out it is needed
    providers: [ DataService, SorterService] // regstering the service with provider
})
export class CoreModule { }