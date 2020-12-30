import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
username:string = "";

  constructor() { }

  ngOnInit() {
  }
  resetUsername(){
    this.username = ''
    return this.username;
  }
}
