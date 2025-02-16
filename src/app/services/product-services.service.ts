import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { productList } from '../../data/productlist';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: Product[] = productList

  constructor() {
    this.getAllProducts();
  }

  getAllProducts() {
    return this.productList;
  }

  getCondition() {
    return [... new Set(this.productList.map(product => product.condition))]
  }

  getColors() {
    return [... new Set(this.productList.flatMap(product => product.color))]
  }

  getRarity() {
    return [... new Set(this.productList.map(product => product.rarity))]
  }

}
