import { Component, OnInit } from '@angular/core';
import { product } from '../productList.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductDetailComponent } from '../product-detail/product-detail.component';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  
  constructor(private router:Router, private activatedRoute: ActivatedRoute) { }

  public p=[
    {name:"abc"},
    {name:"def"},
    {name:"ghi"},
    {name:"jkl"},

  ]
  public prod1:product[]=[
      {
        pk:1,                /*pk*/
        name:"book name",                           /*name*/
        description:"book description goes here",   /*description*/
        quantity: 5,                                /*quantity*/
        pricePerQuantity:100,                       /*price per quantity*/
        timeStamp:"time",                           /*time stamp*/
        categoryFk:1,                               /*categoryFk*/
        availability:true,                          /*availability */
        sell:true,                                  /*sell*/
        validity:1,                                 /*validity*/
        lendingPrice:1.2222,                        /*lending price */     
        rating:4.9,                                 /*rating*/
        tags:"tags",                                /*tags*/
        reportedCount:12,                           /*reportedCount*/ 
        spam:false                                  /*spam */
      },
      {
        pk:2,                /*pk*/
        name:"book name2",                           /*name*/
        description:"book2 description goes here",   /*description*/
        quantity: 51,                                /*quantity*/
        pricePerQuantity:1100,                       /*price per quantity*/
        timeStamp:"time2",                           /*time stamp*/
        categoryFk:1,                               /*categoryFk*/
        availability:true,                          /*availability */
        sell:true,                                  /*sell*/
        validity:1,                                 /*validity*/
        lendingPrice:111.2222,                        /*lending price */     
        rating:4.9,                                 /*rating*/
        tags:"tags",                                /*tags*/
        reportedCount:12,                           /*reportedCount*/ 
        spam:false                                  /*spam */
      }
    ]


  ngOnInit() {
  }

  onItemClick(){
    this.router.navigate(['/productDetails'], {relativeTo: this.activatedRoute});
  }
 
  
}
