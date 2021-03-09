import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../Models/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  private itemSource = new BehaviorSubject(null);

  currentItem = this.itemSource.asObservable();

  constructor() { }

  addItem(item: IProduct) {
    this.itemSource.next(item);
  }

}
