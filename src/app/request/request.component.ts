import { Component, OnInit } from '@angular/core';
import {request} from './request.model';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  constructor() { }

  public req1:request[]=[{ pk:1,                         /*pk*/
                           buyer:123,                    /*buyer*/
                           name:"omkar",                  /*name of buyer*/
                           timestamp:"time",             /*time*/
                           status:"buy"   ,              /*status*/
                           description:"I want to buy"   /*description*/ 
                         },
                         { pk:2,                          /*pk*/
                          buyer:456,                      /*buyer*/
                          name:"amey",                    /*name of buyer*/
                          timestamp:"yo yo",              /*time*/
                          status:"buy2",                   /*status*/
                          description:"I want to buy 2"   /*description*/
                         }]

  ngOnInit() {
  }

}
