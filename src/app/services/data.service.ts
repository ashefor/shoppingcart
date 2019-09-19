import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private cartItems = new BehaviorSubject([])
  cartlength = new BehaviorSubject(null)
  currentItems = this.cartItems.asObservable()
  constructor() { }

  viewCart(items: any[]){
    this.cartItems.next(items)
  }
  
}
