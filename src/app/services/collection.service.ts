import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  private collecURL = 'api/collection'
  private viewCart = 'api/cart'
  constructor(private http: HttpClient) { }

  getCollections() {
    return this.http.get(this.collecURL).map(res => res)
  }
  viewMore(id){
    return this.http.get(`${this.collecURL}/${id}`).map(res => res)
  }

  viewcart(){
    return this.http.get(this.viewCart).map(res => res)
  }
  addtocart(
    id: number,
    price: number,
    product_name: string,
    qty: number,
    ){
    return this.http.post(this.viewCart, {id, price, product_name, qty})
  }
}
