import { DataService } from './../../services/data.service';
import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { CollectionService } from 'src/app/services/collection.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { collection } from './collection';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})

export class CollectionComponent implements OnInit {
  qty = 1;
  cart: any[] = [];
  @ViewChild('navmenu') navMenu: ElementRef<HTMLElement>;
  @ViewChild('menubtn') menuBtn: ElementRef<HTMLElement>;
  @ViewChild('loading') isLoading: ElementRef<HTMLElement>
  allcollection = [];
  singleItemLoaded = false;
  collectionLoaded = false;
  skeletonCollections = new Array(12).fill(1);
  singleprice;
  singleproduct;
  singleimage;
  productId: number;
  noSize;
  allsizes = [
    'small', 'medium', 'large'
  ]
  addForm: FormGroup
  constructor(private cs: CollectionService,
    private ds: DataService, private formbuilder: FormBuilder, private authservice: AuthService) { }

  ngOnInit() {
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
    this.cs.viewMore(i).subscribe((data: any) => {
      this.singleprice = data.price;
      this.singleproduct = data.product_name;
      this.singleimage = data.img;
      this.singleItemLoaded = true;
    })
    const modal = document.getElementById('modalEdicion')
    modal.classList.add('is-active')
    this.productId = i;
  }

  closeModal() {
    document.getElementById('modalEdicion').classList.remove('is-active')
    this.singleprice = '';
    this.singleproduct = '';
    this.singleimage = '';
    this.singleItemLoaded = false;
    this.addForm.reset({ quantity: this.qty })
  }

  collectAll() {
    this.cs.getCollections().subscribe((data: any) => {
      if (data) {
        this.allcollection = data;
        this.collectionLoaded = true;
      }
    })
  }

  addthisToCart(formvalue) {
    const total = this.singleprice * formvalue.quantity
    if (this.addForm.valid) {
      const collectiondata: collection = {
        id: this.productId,
        productname: this.singleproduct,
        newamount: this.singleprice,
        newqty: formvalue.quantity,
        imgUrl: this.singleimage,
        size: formvalue.jewelry,
        total
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
