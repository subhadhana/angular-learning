import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { observable, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
//write one method (own) that return data from api
  getAllproducts():Observable<any>{
    return this.http.get("http://localhost:3000/products/");
  }

}
