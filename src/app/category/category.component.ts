import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  key = localStorage.getItem('key');
  username;
  categories = [];
  ngAfterContentChecked() {
    this.username = localStorage.getItem('username');
  }

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(
      data => this.categories = data,
      error => console.log('error', error)
    );
  }

}
