import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct, Product } from 'src/app/Models/Products';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-one',
  templateUrl: './product-one.component.html',
  styleUrls: ['./product-one.component.css']
})
export class ProductOneComponent implements OnInit {

  itemOne: IProduct = new Product();
  itemTwo: IProduct = new Product();
  itemThree: IProduct = new Product();
  itemFour: IProduct = new Product();
  itemFive: IProduct = new Product();

  constructor(private productService: ProductService,
              private route: Router) { }

  ngOnInit(): void {

    this.itemOne.id = 1;
    this.itemOne.name = "IdeaPad 320";
    this.itemOne.type = "Electronics";
    this.itemOne.brand = "Lenovo";

    

    this.productService.addItem(this.itemOne);
    
  }

  onClick() {
    this.route.navigate(['/producttwo'])
  }


}
