import { DataService } from './../../services/data.service';
import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any[];
  length;
  noItems;
  newamount = [];
  qty;
  total;
  itemprice;
  subtotal;
  constructor(private ds: DataService, private elem: ElementRef) { }

  ngOnInit() {
    this.ds.currentItems.subscribe(items => this.cart = items)
    this.length = this.cart.length
    console.log(this.cart)
    if(this.length < 1){
      this.noItems = true;
    }
    let sum = 0;
    for(let x of this.cart){
      // console.log(x)
      this.itemprice = x.newamount
      this.total = (x.newamount * x.newqty).toFixed(2)
      let pricearr: Array<any> = new Array()
      let price = (x.newamount * x.newqty).toFixed(2)
      pricearr.push(price)
      this.newamount.push(pricearr)
      console.log(this.newamount)
      let newsum = parseInt(x.total)
      sum+= newsum
      this.subtotal = sum
      console.log(sum)
    }
  }
  showMenu(){
    document.getElementById('burger').classList.toggle("is-active")
    document.getElementById('navbarBasicExample').classList.toggle('is-active')
  }

  removeItem(i){
    console.log(i)
    console.log(this.cart)
    let index = this.cart.findIndex(item => item.id == i)
    console.log(index)
    if(index > -1){
      this.cart.splice(index, 1)
    }
    this.length = this.cart.length
    if(this.length < 1){
      this.noItems = true;
    }
    let sum = 0;
    for(let y of this.cart){
    let newsum = parseInt(y.total)
    sum+= newsum
    this.subtotal = sum
    // console.log(sum)
    }
  }

  chooseQty(e) {
    this.qty = e.target.value
    console.log(this.qty)
    this.total = (this.itemprice * this.qty).toFixed(2)
  }

  showTot(){
    console.log(this.subtotal)
  }

}
