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


@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(FakeBackendService)
  ],
  providers: [CollectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
