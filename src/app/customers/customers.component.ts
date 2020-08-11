import { Component, OnInit, Injectable } from '@angular/core';
import { ICustomer } from '../shared/interfaces';
import { DataService } from '../core/data.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable() // This is optional though. But, is an indicator that the component has a dependency.
@Component({
  selector: 'customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  title: string;  
  people: ICustomer[];
  
  //Injecting the service through the constructor
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.title = 'Predictive Customers Search';    
    this.dataService.getCustomers()
        .subscribe((customers : ICustomer[]) => this.people = customers);    
  }
}
