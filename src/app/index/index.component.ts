import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import {APIService} from 'src/app/api.service'
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(public HttpResponse:APIService) {
    this.value = this.HttpResponse.value    
   }
   value:string;
   title = [
    {'title':"Planning" , "imgUrl":"plan.jpg" },
    {'title':"Purchase" , "imgUrl":"purchase.jpg" },
    {'title':"Stock" , "imgUrl":"stock.jpg" },
    {'title':"Marketing" , "imgUrl":"marketing.jpg" },
    {'title':"Production" , "imgUrl":"production.jpg" },
    {'title':"Quality" , "imgUrl":"checking.jpg" },
    {'title':"Engineering", "imgUrl":"engineering.jpg"} ]
    }
  ngOnInit(): void {
  }
  
 
}
