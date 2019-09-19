import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { collection } from '../components/collection/collection';

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
  addtocart(collection: collection){
    return this.http.post(this.viewCart, {collection})
  }
}
