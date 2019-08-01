import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any[];
  length;
  noItems;
  newamount = []
  constructor(private ds: DataService) { }

  ngOnInit() {
    this.ds.currentItems.subscribe(items => this.cart = items)
    this.length = this.cart.length
    // console.log(this.cart)
    if(this.length < 1){
      this.noItems = true;
    }
    for(let x of this.cart){
      // console.log(x)
      let pricearr: Array<any> = new Array()
      let price = (x.newamount * x.newqty).toFixed(2)
      pricearr.push(price)
      this.newamount.push(pricearr)
      console.log(this.newamount)
    }

  }

}
