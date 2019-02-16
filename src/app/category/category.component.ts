import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category/services/category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from '../product/services/request.service';
import { ProductlistService } from '../product/services/productlist.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  key = localStorage.getItem('key');
  profileId = localStorage.getItem('profileId');
  username;
  i;
  j;
  k = 0;
  categories = [];
  requests = [];
  requestList = [];

  constructor(private categoryService: CategoryService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private requestService: RequestService,
              private productListService: ProductlistService) { }

  ngOnInit() {
    this.getCategories();
    this.requestService.getRequest().subscribe(
      data => this.requests = data,
      error => console.log('error', error)
    );
  }

  ngAfterContentChecked() {
    this.username = localStorage.getItem('username');
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(
      data => this.categories = data,
      error => console.log('error', error)
    );
  }

  onProfile() {
    this.router.navigate(['/profile'], {relativeTo: this.activatedRoute});
  }

  onCategorySelect(category) {
    this.router.navigate(['/products', category.pk])
  }

  onSell() {
    this.router.navigate(['/sell'], {relativeTo: this.activatedRoute});
  }

  onLogout() {
    localStorage.clear();
    this.router.navigate(['/login'], {relativeTo: this.activatedRoute});
  }

}
