import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {
  products$;
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) { 
    this.products$ = productService.getAll();
  }
}
