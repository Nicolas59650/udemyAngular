import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding2',
  templateUrl: './databinding2.component.html',
  styleUrls: ['./databinding2.component.css']
})
export class Databinding2Component implements OnInit {
secretPassword: Boolean = false;
arrayItems = [];
  constructor() { }

  ngOnInit() {
  }

  showPassword(){
    this.secretPassword = !this.secretPassword;
    let numberItems = this.arrayItems.length +1;
    this.arrayItems.push(numberItems);
  }
}
