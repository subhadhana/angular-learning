import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //string interpolation
  title = 'Data-Binding';
  //property binding
  imageUrl =
    'https://www.facebook.com/photo.php?fbid=2848283105263152&set=t.100003312101267&type=3';

  allowFunction = false;
  constructor() {
    setTimeout(() => {
      this.allowFunction = true;
    }, 5000);
  }

  //event binding
  greet() {
    alert('hello');
  }
  firstName: string = 'subha';
  courses = ['java', 'python', 'sql'];

  employee = [
    { name: 'Ram', email: 'ram@gmail.com', age: 23 },
    { name: 'Shyam', email: 'shyam23@gmail.com', age: 28 },
    { name: 'John', email: 'john@gmail.com', age: 33 },
    { name: 'Bob', email: 'bob32@gmail.com', age: 41 },
  ];
}
