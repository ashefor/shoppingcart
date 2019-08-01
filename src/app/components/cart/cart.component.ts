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
  constructor(private ds: DataService) { }

  ngOnInit() {
    this.ds.currentItems.subscribe(items => this.cart = items)
    this.length = this.cart.length
    if(this.length < 1){
      this.noItems = true;
    }
  }

}
