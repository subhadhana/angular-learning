import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Sample-ExpenseSheet-RestAPI';

  products: any = []; //array
  model: any = {}; //object created

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.products = this.service.getAllproducts().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }
  buttonClickEvent() {
    console.log('click event');
  }
}
