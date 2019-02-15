import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category/services/category.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  key = localStorage.getItem('key');
  username;
  categories = [];

  constructor(private categoryService: CategoryService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getCategories();
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

  onCategorySelect(category) {
    this.router.navigate(['/products', category.pk])
  }

}
