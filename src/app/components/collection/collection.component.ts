import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { CollectionService } from 'src/app/services/collection.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  qty: number = 1;
  cart: any[] = [];
  length;
  allcollection = [];
  oneitem = new Object();
  singleprice;
  singleproduct;
  singleimage;
  private allimgs = [];
  prices: number;
  size = null
  product_id: number;
  noSize;
  show = false;
  constructor(private cs: CollectionService, private ds: DataService) { }

  ngOnInit() {
    this.collectAll()
    this.ds.currentItems.subscribe(items => this.cart = items);
    this.length = this.cart.length;
  }
  selectSize(event) {
    if (event.target.value == "null") {
      this.noSize = true;
    }
    else {
      this.noSize = false;
    }
    this.size = event.target.value
  }

  chooseQty(e) {
    this.qty = e.target.value
  }
  openModal(i) {
    this.cs.viewMore(i).subscribe((data: any) => {
      this.singleprice = data.price;
      this.singleproduct = data.product_name;
      this.singleimage = data.img
    })
    let modal = document.getElementById('modalEdicion')
    modal.classList.add('is-active')
    this.product_id = i;
  }

  closeModal() {
    document.getElementById('modalEdicion').classList.remove('is-active')
    this.singleprice = "";
    this.singleproduct = ""
    this.singleimage = ""
    this.qty = 1;
    this.size = null;
  }

  collectAll() {
    this.cs.getCollections().subscribe((data: any) => {
      this.allcollection = data
    })
  }

  showMenu() {
    document.getElementById('burger').classList.toggle("is-active")
    document.getElementById('navbarBasicExample').classList.toggle('is-active')
  }

  addthisToCart() {
    if ((this.size !== "small") && (this.size !== "medium") && (this.size !== "large")) {
      this.noSize = true;
    }
    else {
      this.ds.viewCart(this.cart)
      this.noSize = false;
      let arr = {
        id: this.product_id,
        productname: this.singleproduct,
        newamount: this.singleprice,
        newqty: this.qty,
        imgUrl: this.singleimage,
        size: this.size,
        total: this.singleprice * this.qty
      }
      this.cart.push(arr)
      this.length = this.cart.length;
      setTimeout(() => {
        this.closeModal()
      }, 1000)
    }
  }
}
