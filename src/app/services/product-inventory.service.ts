import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Product} from "../data/products.data";
@Injectable({
  providedIn: 'root'
})
export class ProductInventoryService {

  constructor( private http: HttpClient ) { }

  getProducts(){
    return this.http.get<Product[]>(`/assets/api/products.json`);
  }
}
