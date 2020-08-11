import { Component, OnInit, Input, Injectable } from '@angular/core';
import { ICustomer } from '../../shared/interfaces';
import { SorterService } from '../../core/sorter.service';

// @Injectable is optional though. But, is an indicator that the component has a dependency.
@Injectable()
@Component({
  selector: 'customers-list',
  templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit {

  // underscore being used with variable as standard for private type
  private _customers: ICustomer[] = [];

  filteredCustomers: ICustomer[] = [];
  customersOrderTotal: number;
  currencyCode: string = 'USD';

  //Injecting the service through the constructor
  constructor(private sortingService: SorterService) { }

  ngOnInit(): void {
  }

  get customers(): ICustomer[] {
    return this._customers;
  }

  @Input()
  set customers(value: ICustomer[]) {
    if (value) {
      this.filteredCustomers = this._customers = value;
      this.calculateOrders();
    }
  }

  filterData(data: string) {
    if (data) {
      this.filteredCustomers = this.customers.filter((cust: ICustomer) => {
        return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          cust.orderTotal.toString().indexOf(data) > -1;
      });
    } else {
      this.filteredCustomers = this.customers;
    }
    this.calculateOrders();
  }

  calculateOrders(): void {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((cust: ICustomer) => {
      this.customersOrderTotal += cust.orderTotal;
    });
  }

  sort(prop: string): void {
    this.sortingService.sort(this.filteredCustomers, prop);
  }

}
