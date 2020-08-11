import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { ActivatedRoute } from '@angular/router';
import { IOrder, ICustomer } from '../shared/interfaces';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: IOrder[] = [];
  customer: ICustomer;

  constructor(private dataService: DataService,
    private route: ActivatedRoute,
    private spinnerService: NgxSpinnerService) { } // ActivatedRoute is for reeading id from path param

  ngOnInit() {
    // id path param being read from route
    let id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.spinnerService.show();
    
    this.dataService.getOrders(id).subscribe((orders: IOrder[]) => {
      this.orders = orders;      
    });
    
    this.dataService.findCustomer(id).subscribe((customer: ICustomer) => {
      this.customer = customer;
      this.spinnerService.hide();
    });
    
  }

}
