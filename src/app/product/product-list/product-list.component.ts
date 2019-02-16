import { Component, OnInit } from '@angular/core';
import { Product } from '../observables/productList.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductlistService } from '../services/productlist.service';
import { RequestService } from '../../product/services/request.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public categoryPk;
  key = localStorage.getItem('key');
  username;
  i;
  j;
  products = [];
  priceFilter = '500';
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private productService: ProductlistService,
              private requestService: RequestService) { }

  ngOnInit() {
    let pk = this.activatedRoute.snapshot.paramMap.get('pk');
    this.categoryPk = pk;

    this.productService.getProducts(this.categoryPk).subscribe(
      data => this.products = data,
      error => console.log('error', error)
    );

    console.log('products', this.products);
  }

  ngAfterContentChecked() {
    this.username = localStorage.getItem('username');
  }

  onLogout() {
    localStorage.clear;
    this.router.navigate(['/login'], {relativeTo: this.activatedRoute});
  }

  onItemClick(){
    this.router.navigate(['/productDetails'], {relativeTo: this.activatedRoute});
  }

  onProductSelect(id) {
    const product = {'product': id};
    console.log('product', product);
    this.requestService.createRequest(product).subscribe(
      data => window.alert("Your request has been submitted."),
      error => console.log('error', error)
    );
  }
}
