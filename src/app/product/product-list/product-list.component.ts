import { Component, OnInit } from '@angular/core';
import { Product } from '../observables/productList.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductlistService } from '../services/productlist.service';


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
              private productService: ProductlistService) { }

  ngOnInit() {
    let pk = this.activatedRoute.snapshot.paramMap.get('pk');
    this.categoryPk = pk;

    this.productService.getProducts(this.categoryPk).subscribe(
      data => this.products = data,
      error => console.log('error', error)
    );
  }

  ngAfterContentChecked() {
    this.username = localStorage.getItem('username');
  }

  onItemClick(){
    this.router.navigate(['/productDetails'], {relativeTo: this.activatedRoute});
  }

  onProductSelect() {
    window.prompt("The seller will see your contact details after accepting your request. Please mention location, price you're willing to pay, etc.");
  }
}
