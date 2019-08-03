import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectionComponent } from './components/collection/collection.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeBackendService } from './fakebackend.service';
import { HttpClientModule } from '@angular/common/http';
import { CollectionService } from './services/collection.service';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';

import { NgxUsefulSwiperModule } from 'ngx-useful-swiper'


@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    CartComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxUsefulSwiperModule,
    InMemoryWebApiModule.forRoot(FakeBackendService)
  ],
  providers: [CollectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
