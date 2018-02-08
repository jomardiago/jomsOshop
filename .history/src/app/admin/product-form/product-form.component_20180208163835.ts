import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { Observable } from 'rxjs/Observable';
import { ProductService } from '../../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  categories$: Observable<any>;
  product = {};
  id;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    this.categories$ = categoryService.getCategories();
    this.id = this.activatedRoute.snapshot.params.id;
    if (id) {
      productService.getProductById(id).take(1).subscribe(product => {
        this.product = product;
      });
    }
  }

  save(product) {
    this.router.navigate(['/admin/products']);
    this.productService.create(product);
  }
}
