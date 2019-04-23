import { Component, OnInit } from '@angular/core';
import { text } from '@angular/core/src/render3';

@Component({
  selector: '[app-test]',
  templateUrl: './test.component.html',
  styles: [`
 
  li{
    display: inline;
    padding: 15px;
    font-size:26px;
  }
  .navbar{
    background-color: lightblue;
  }
  .form-label  {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
      }
      .container{
        display:inline;
        padding:0;
      }
  `]
})
export class TestComponent implements OnInit {

  itemCount: number;
  btnText: string = 'Add an item';
  goText: string = 'My first Life goal';
  goals = [];
  constructor() { 

  }

  ngOnInit() {
    this.itemCount= this.goals.length;
     
  }
  addItem(){
    this.goals.push(this.goText);
    this.goText='';
    this.itemCount=this.goals.length;
  }
}
