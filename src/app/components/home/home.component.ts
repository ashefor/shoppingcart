import { DataService } from './../../services/data.service';
import { CollectionService } from './../../services/collection.service';
import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allcollection = [];
  cart: any[] = [];
  length;
  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30,
    slidesPerView: 4,
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      }
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  };
  constructor(private cs: CollectionService, private ds: DataService) {
  }

  ngOnInit() {
    this.collectAll();
    this.ds.currentItems.subscribe(items => this.cart = items);
    this.length = this.cart.length;
  }
  collectAll() {
    this.cs.getCollections().subscribe((data: any) => {
      this.allcollection = data
      this.length = this.cart.length;
    })
  }
  showMenu(){
    document.getElementById('burger').classList.toggle("is-active")
    document.getElementById('navbarBasicExample').classList.toggle('is-active')
  }
}
