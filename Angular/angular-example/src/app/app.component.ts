import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-test';
  products = Array<any>()
  addItem(){
    this.products.push("ANGULAR TEST ITEM");
  }
}
