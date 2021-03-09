import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/Products';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-two',
  templateUrl: './product-two.component.html',
  styleUrls: ['./product-two.component.css']
})
export class ProductTwoComponent implements OnInit {

  items: any[] = [];
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.currentItem.subscribe(data => {
          this.items.push(data);
          console.log(this.items);
          
    })
  }

}
