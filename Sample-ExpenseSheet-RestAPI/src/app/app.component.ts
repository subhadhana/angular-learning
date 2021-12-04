import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Sample-ExpenseSheet-RestAPI';
  products:any=[];
  constructor(private service:ProductService){
    //this.product=this.service.getAllproducts().subscribe(data=>{
      //this.product=data;//})
      //this.product=this.service.getAllproducts();
      //console.log(this.product);
    }ngOnInit(): void {
    this.products=this.service.getAllproducts().subscribe(data=>{
      this.products=data;
      console.log(this.products);
    }

    )
  }
;
    

  
}
