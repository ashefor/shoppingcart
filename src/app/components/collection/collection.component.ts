import { DataService } from './../../services/data.service';
import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { CollectionService } from 'src/app/services/collection.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { collection } from './collection';
import { AuthService } from '../auth/auth.service';

interface sizes {
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
  @ViewChild('navmenu') navMenu: ElementRef<HTMLElement>;
  @ViewChild('menubtn') menuBtn: ElementRef<HTMLElement>;
  @ViewChild('loading') isLoading: ElementRef<HTMLElement>
  allcollection = [];
  singleItemLoaded = false;
  showCollection: boolean;
  singleprice;
  singleproduct;
  singleimage;
  product_id: number;
  noSize;
  allsizes = [
    'small', 'medium', 'large'
  ]
  addForm: FormGroup
  constructor(private cs: CollectionService,
    private ds: DataService, private formbuilder: FormBuilder, private authservice: AuthService) { }

  ngOnInit() {
    this.showCollection = true;
    this.initialiseForm()
    this.collectAll()
    this.ds.currentItems.subscribe(items => this.cart = items);
  }
  initialiseForm() {
    this.addForm = this.formbuilder.group({
      quantity: [this.qty],
      jewelry: [null, Validators.required]
    })
  }

  get isLoggedIn() {
    return this.authservice.isLoggedIn
  }

  get username() {
    if (this.authservice.currentUser) {
      return this.authservice.currentUser.userName
    }
  }
  logOut() {
    this.authservice.logoutUSer()
  }
  openModal(i) {
    // this.singleItemLoaded = true;
    this.cs.viewMore(i).subscribe((data: any) => {
      this.singleprice = data.price;
      this.singleproduct = data.product_name;
      this.singleimage = data.img;
      this.singleItemLoaded = true;
    })
    let modal = document.getElementById('modalEdicion')
    modal.classList.add('is-active')
    this.product_id = i;
  }

  closeModal() {
    document.getElementById('modalEdicion').classList.remove('is-active')
    this.singleprice = '';
    this.singleproduct = '';
    this.singleimage = '';
    this.singleItemLoaded = false;
    this.addForm.reset({quantity: this.qty})
  }

  collectAll() {
    this.cs.getCollections().subscribe((data: any) => {
      this.showCollection = false;
      this.allcollection = data;
    })
  }

  addthisToCart(formvalue) {
    let total = this.singleprice * formvalue.quantity
    if (this.addForm.valid) {
      let collectiondata: collection = {
        id: this.product_id,
        productname: this.singleproduct,
        newamount: this.singleprice,
        newqty: formvalue.quantity,
        imgUrl: this.singleimage,
        size: formvalue.jewelry,
        total: total
      }
      this.cart.push(collectiondata)
      this.ds.viewCart(this.cart)
      this.isLoading.nativeElement.classList.toggle('is-loading')
      setTimeout(() => {
        this.isLoading.nativeElement.classList.toggle('is-loading')
        this.closeModal()
      }, 1000)
    }
  }
}
