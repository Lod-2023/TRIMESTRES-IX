import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: { nombre: string, precio: number, cantidad: number, referencia: string }[] = [];

  constructor() { }

  createNewProduct(nombre: string, precio: number, cantidad: number, referencia: string) {
    this.productList.push({ nombre, precio, cantidad, referencia });
  }

  getProductList() {
    return this.productList;
  }

  clearProductList() {
    this.productList = [];
  }
}
