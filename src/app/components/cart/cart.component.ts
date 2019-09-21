import { DataService } from './../../services/data.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any[];
  length;
  @ViewChild('navmenu') navMenu: ElementRef<HTMLElement>;
  @ViewChild('menubtn') menuBtn: ElementRef<HTMLElement>
  noItems;
  qty;
  subtotal;
  shippingcost: number;
  totalAmount;
  promocode = false;
  constructor(private ds: DataService) { }

  ngOnInit() {
    this.ds.currentItems.subscribe(items => this.cart = items)
    if (this.cart.length < 1) {
      this.noItems = true;
    }
    let sum = 0;
    for (let x of this.cart) {
      let newsum = +x.total
      sum += newsum
      this.subtotal = sum
      this.totalAmount = (+this.subtotal + +(this.shippingcost ? this.shippingcost : 0)).toFixed(2)
    }
  }

  removeItem(i) {
    this.cart.splice(i, 1)
    
    this.ds.viewCart(this.cart)
    if (this.cart.length < 1) {
      this.noItems = true;
    }
    let sum = 0;
    for (let y of this.cart) {
      let newsum = +y.total
      sum += newsum
      this.subtotal = sum
      this.totalAmount = (+this.subtotal + +(this.shippingcost ? this.shippingcost : 0)).toFixed(2)
    }
  }

  chooseQty(e, i) {
    this.qty = e.target.value
    this.cart[i].newqty = this.qty;
    this.cart[i].total = (this.cart[i].newamount * this.qty).toFixed(2)
    let sum = 0;
    for (let obj of this.cart) {
      let newsum = +obj.total
      sum += newsum
      this.subtotal = sum;
      this.totalAmount = (+this.subtotal + +(this.shippingcost ? this.shippingcost : 0)).toFixed(2)
    }
  }

  enterpromo() {
    this.promocode = !this.promocode;
  }
}
