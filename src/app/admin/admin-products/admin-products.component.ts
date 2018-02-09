import { Component, OnDestroy } from '@angular/core';
import { ProductService } from '../../product.service';
import { Subscription } from 'rxjs/Subscription';
import { Product } from '../../models/product';
import { DataTableResource } from '../../data-table/index';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnDestroy {
  products: Product[];
  filteredProducts: Product[];
  subscription: Subscription;
  tableResource: DataTableResource<Product>;
  items: Product[] = [];
  itemCount: number;

  constructor(private productService: ProductService) { 
    this.subscription = productService.getAll().subscribe(products => {
      this.filteredProducts = this.products = products;
      this.initializeDataTable(products);
    });
  }

  private initializeDataTable(products: Product[]) {
    this.tableResource = new DataTableResource(products);
    this.tableResource.query({ offset: 0 }).then(items => {
      this.items = items;
    });
    this.tableResource.count().then(count => {
      this.itemCount = count;
    });
  }

  reloadItems(params) {
    if (!this.tableResource) {
      return;
    }

    this.tableResource.query(params).then(items => {
      this.items = items;
    });
  }

  filter(query: string) {
    this.filteredProducts = query ? this.products.filter(product => product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())) : this.products;
    this.initializeDataTable(this.filteredProducts);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
