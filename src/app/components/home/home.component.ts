import { DataService } from './../../services/data.service';
import { CollectionService } from './../../services/collection.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('navmenu') navMenu: ElementRef<HTMLElement>;
  @ViewChild('menubtn') menuBtn: ElementRef<HTMLElement>;
  config: any = {
    pagination: {
      el: '.swiper-pagination',
    },
    slidesPerView: 4,
    paginationClickable: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
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
      450: {
        slidesPerView: 1,
        spaceBetween: 10,
      }
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
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
      this.length = this.cart.length;
    })
  }
  showMenu() {
    this.navMenu.nativeElement.classList.toggle('is-active');
    this.menuBtn.nativeElement.classList.toggle('is-active')
  }
}
