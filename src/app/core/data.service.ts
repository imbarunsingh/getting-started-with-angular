import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

import { ICustomer, IOrder } from '../shared/interfaces';


@Injectable()
export class DataService {

    baseUrl: string = 'assets/'; // Local HTTP server set Up

    customerMockAPI_url : string = "https://5f325d35ec83300016137147.mockapi.io/customers";
    
    //http client injected here as dependency
    constructor(private http: HttpClient) { }

    getCustomers() : Observable<ICustomer[]> {
        return this.http.get<ICustomer[]>(this.customerMockAPI_url)
            .pipe(
                catchError(this.handleError)
            );
    }

    findCustomer(id: number) : Observable<ICustomer> {
        return this.http.get<ICustomer[]>(this.customerMockAPI_url)
          .pipe(
            map(customers => {
              let customer = customers.filter((cust: ICustomer) => cust.id === id);
              return (customer && customer.length) ? customer[0] : null;
            }),
            catchError(this.handleError)
          )
      }

      getOrders(id: number) : Observable<IOrder[]> {
        return this.http.get<IOrder[]>(this.baseUrl + 'orders.json')
          .pipe(
            map(orders => {
              let custOrders = orders.filter((order: IOrder) => order.customerId === id);
              return custOrders;
            }),
            catchError(this.handleError)
          );
      }


    private handleError(error: any) {
      console.error('server error:', error);
      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return Observable.throw(errMessage);
          // Use the following instead if using lite-server
          // return Observable.throw(err.text() || 'backend server error');
      }
      return Observable.throw(error || 'Node.js server error');
    }
}