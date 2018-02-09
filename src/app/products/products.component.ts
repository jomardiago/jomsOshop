import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  selectedCategory: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) { 
    this.productService.getAll().switchMap(products => {
      this.products = this.filteredProducts = products;
      return activatedRoute.queryParamMap
    }).subscribe(params => {
      this.selectedCategory = params.get('category');

      this.filteredProducts = this.selectedCategory ? 
      this.products.filter(product => this.selectedCategory === product.category) : 
      this.products;
    });
  }
}
