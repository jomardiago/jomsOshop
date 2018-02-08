import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { Observable } from 'rxjs/Observable';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  categories$: Observable<any>;
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router
  ) { 
    this.categories$ = categoryService.getCategories();
  }

  save(product) {
    this.productService.create(product);
  }
}
