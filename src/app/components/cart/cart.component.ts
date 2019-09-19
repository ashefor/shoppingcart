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
  promocode = false;
  constructor(private ds: DataService, private elem: ElementRef) { }

  ngOnInit() {
    this.ds.currentItems.subscribe(items => this.cart = items)
    this.length = this.cart.length
    if (this.length < 1) {
      this.noItems = true;
    }
    let sum = 0;
    for (let x of this.cart) {
      let newsum = +x.total
      sum += newsum
      this.subtotal = sum
    }
  }
  showMenu() {
    this.navMenu.nativeElement.classList.toggle('is-active');
    this.menuBtn.nativeElement.classList.toggle('is-active')
  }

  removeItem(i) {
    let index = this.cart.findIndex(item => item.id == i)
    if (index > -1) {
      this.cart.splice(index, 1)
    }
    this.length = this.cart.length
    if (this.length < 1) {
      this.noItems = true;
    }
    let sum = 0;
    for (let y of this.cart) {
      let newsum = parseInt(y.total)
      sum += newsum
      this.subtotal = sum
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
      this.subtotal = sum
    }
  }

  enterpromo() {
    this.promocode = !this.promocode;
  }
  showTot() {
    console.log(this.subtotal)
  }

}
