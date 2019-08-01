import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private cartItems = new BehaviorSubject([])
  currentItems = this.cartItems.asObservable()
  constructor() { }

  viewCart(items: any[]){
    this.cartItems.next(items)
  }
}
