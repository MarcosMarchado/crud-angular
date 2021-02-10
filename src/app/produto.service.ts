import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './model/Product';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  baseUrl = "http://localhost:3001/products";

  produto: Product
  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
  }

  put(product: Product) {
    return this.http.put(`${this.baseUrl}/${product.id}`, product)
  }

  filter(term: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}?name_like=${term}`)
  }

  //Test

}
