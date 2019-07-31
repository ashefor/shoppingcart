import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  private collecURL = 'api/collection'
  constructor(private http: HttpClient) { }

  getCollections() {
    return this.http.get(this.collecURL).map(res => res)
  }
}
