import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../category.service';
import {  } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.css']
})
export class ProductsFilterComponent {
  @Input('selected-category') selectedCategory: string;
  categories$;
  constructor(private categoryService: CategoryService) {
    this.categories$ = this.categoryService.getAll();
  }
}
