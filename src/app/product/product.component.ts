import { Component, OnInit } from '@angular/core';
import { Product } from './observables/productList.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductuploadService } from './services/productupload.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public productCategory=[
    {"category": 2, "title": "Stationary"},
    {"category": 3, "title": "Books"},
    {"category": 4, "title": "Notes"},
    {"category": 5, "title": "Instruments"}
  ];
  i;
  imageUrl = 'http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png';
  key = localStorage.getItem('key');
  formData = new FormData();
  product = new Product();
  username;
  selectedCategory;
  isSelling = false;
  selectedPicture: File = null;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private uploadService: ProductuploadService) { }

  ngOnInit() {
  }

  ngAfterContentChecked(){
    this.username = localStorage.getItem('username');
  }

  processFile(event){
    this.selectedPicture = <File> event.target.files[0];

    var reader = new FileReader();
    reader.readAsDataURL(this.selectedPicture);
    reader.onload = (_event) => {
      this.imageUrl = reader.result;
    };
  }

  onUpload(){
    console.log(this.product);
    this.formData.append('title', this.product.title);
    this.formData.append('description', this.product.description);
    this.formData.append('productImage', this.selectedPicture, this.selectedPicture.name);
    this.formData.append('quantity', this.product.quantity.toString());
    this.formData.append('sell', this.isSelling ? 'true' : 'false');
    this.formData.append('sellingPrice', this.product.sellingPrice.toString());
    this.formData.append('lendingPrice', this.product.sellingPrice.toString());
    this.formData.append('rating', Number(0).toString());
    this.formData.append('available', 'true');
    console.log('cat', this.formData.get('category'));
    this.uploadService.uploadProduct(this.formData).subscribe(
      data => this.router.navigate([''], {relativeTo: this.activatedRoute}),
      error => console.log('error', error)
    );
  }

  onCategoryChange(value){
    console.log(value);
    for( this.i = 0; this.i < this.productCategory.length; this.i++){
      if(value == this.productCategory[this.i].title){
        this.selectedCategory = this.productCategory[this.i].category;
        this.formData.append('category', this.selectedCategory);
        break;
      }
    }

    console.log('category', this.selectedCategory)
  }

  onLogout() {
    localStorage.clear;
    this.router.navigate(['/login'], {relativeTo: this.activatedRoute});
  }

}
