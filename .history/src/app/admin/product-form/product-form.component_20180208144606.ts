import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  categories$: Observable<any>;
  constructor(private categoryService: CategoryService) { 
    this.categories$ = categoryService.getCategories();
  }

  save(product) {
    console.log(product);
  }
}
