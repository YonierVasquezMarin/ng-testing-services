import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/services/product/product.service';
import { Product } from '../../models/';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productsService.getAll()
      .subscribe(products => {
        this.products = products;
      });
  }
}
