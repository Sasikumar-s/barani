import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  titleValue:string = ''
  title = [
    {'title':"planning" , "imgUrl":"plan.jpg" },
    {'title':"purchase" , "imgUrl":"purchase.jpg" },
    {'title':"stock" , "imgUrl":"stock.jpg" },
    {'title':"marketing" , "imgUrl":"checking.jpg" },
    {'title':"production" , "imgUrl":"quality.jpg" } ]
  

  constructor() { }

  ngOnInit(): void {
    console.log(this.titleValue)
  }


}
