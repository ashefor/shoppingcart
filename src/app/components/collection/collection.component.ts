import { DataService } from './../../services/data.service';
import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { CollectionService } from 'src/app/services/collection.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { collection } from './collection';
import { AuthService } from '../auth/auth.service';

interface  sizes{
  small: string,
  medium: string,
  large: string
}
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})

export class CollectionComponent implements OnInit {
  qty: number = 1;
  cart: any[] = [];
  length;
  sampleLength: any = 6;
  @ViewChild('navmenu') navMenu: ElementRef<HTMLElement>;
  @ViewChild('menubtn') menuBtn: ElementRef<HTMLElement>
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
  allsizes = [
    'small', 'medium', 'large'
  ]
  addForm: FormGroup
  constructor(private cs: CollectionService, private ds: DataService, private formbuilder: FormBuilder, private authservice: AuthService) { }

  ngOnInit() {
    this.initialiseForm()
    this.collectAll()
    this.ds.currentItems.subscribe(items => this.cart = items);
    this.length = this.cart.length;
  }
  initialiseForm(){
    this.addForm = this.formbuilder.group({
      quantity: [this.qty],
      jewelry: [null, Validators.required]
    })
  }

  get isLoggedIn(){
    return this.authservice.isLoggedIn
  }

  get username(){
    if(this.authservice.currentUser){
      return this.authservice.currentUser.userName
    }
  }
  logOut(){
    this.authservice.logoutUSer()
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
      this.singleimage = data.img;
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
    this.size === null;
  }

  collectAll() {
    this.cs.getCollections().subscribe((data: any) => {
      this.allcollection = data
    })
  }

  showMenu() {
    this.navMenu.nativeElement.classList.toggle('is-active');
    this.menuBtn.nativeElement.classList.toggle('is-active')

  }

  addthisToCart(formvalue) {
    let total = this.singleprice * formvalue.quantity
   if(this.addForm.valid){
    let arr: collection = {
      id: this.product_id,
      productname: this.singleproduct,
      newamount: this.singleprice,
      newqty: formvalue.quantity,
      imgUrl: this.singleimage,
      size: formvalue.jewelry,
      total: total
    }
    this.cart.push(arr)
    this.ds.viewCart(this.cart)
    this.length = this.cart.length;
    setTimeout(() => {
      this.addForm.reset({quantity: this.qty})
      this.closeModal()
    }, 1000)
   }
  }
}
