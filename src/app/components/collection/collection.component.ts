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
  private allcollection = [];
  oneitem = {};
  singleprice;
  singleproduct;
  private allimgs = [];
  prices: number;
  size = null
  product_id: number;
  noSize;
  constructor(private cs: CollectionService) { }

  ngOnInit() {
    this.collectAll()
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
      this.oneitem = {
        description: data.description,
        price: data.price,
        title: data.product_name,
        image: data.img
      }
    })
    let modal = document.getElementById('modalEdicion')
    modal.classList.add('is-active')
    this.product_id = i;
  }

  closeModal() {
    document.getElementById('modalEdicion').classList.remove('is-active')
    this.oneitem = {};
    this.qty = 1;
    this.size = null;
  }

  collectAll() {
    this.cs.getCollections().subscribe((data: any) => {
      this.allcollection = data
      console.log(this.allcollection)
    })
  }

  addthisToCart() {
    if ((this.size !== "small") && (this.size !== "medium") && (this.size !== "large")) {
      this.noSize = true;
    }
    else {
      this.noSize = false;
      let newprice = (this.singleprice * this.qty).toFixed(2);
      let arr = []
      arr.push(this.singleproduct, newprice, this.qty)
      this.cart.push(arr)
      this.length  = this.cart.length;
      setTimeout(()=>{
        this.closeModal()
      },1000)
    }   
  }
}
