import { Component } from '@angular/core';
import {Hello} from './hello.enum';

enum CellType {Text, Placeholder}
class Cell {
  constructor(public text: string, public type: CellType) {}
}
@Component({
  selector: 'app-root',
  templateUrl:  './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-ang8-app';

 firstvar = ' subhankari';
 lastname = 'padhi';
 number1 = 10;
 number2 = 20;
 fullname = ' two way binding';
 attributeText = 'display_attribute value';
  borderAttr = '2px';
  colspanAttr = '2';
  months = ['January', 'Feburary', 'March', 'April',
    'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December'];
 imgUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
  msg3 = 'this is the rockzzz';
  msg = '';
  valueOfIp = '';
  name = 'Angular 6';
  /*It is generated as object. {'0':'Red', '1':'Green', '2':'Blue', Red: 0, Green: 1, Blue: 2} */
  colors = Hello;
  selectedColor: Hello;
  cellType = CellType;
  public cell: Cell;
  constructor() {
    this.cell = new Cell('Hello', CellType.Text);
  }
   setType(type: CellType) {
    this.cell.type = type;
  }
  public onClick(color: Hello): void {
    this.selectedColor = color;
  }
  addTwonumbers($event) {
   console.log( 'we got addTwonumbers op' );
  // alert('ghjgjhg');
 }
  onSave($event) {
    console.log('Save button is clicked!', $event);
  }
  onDivClick() {
    console.log('DIV is clicked!');
  }
  changemonths($event) {
    console.log('change month from drop down');
    console.log(event);
  }
  setMsg(data: string) {
    this.msg = data;
  }

  changeText(ms: string) {
    this.valueOfIp = ms;
  }
}
/*
'./app.component.html', template: `<div><h1>root view</h1><app-employee></app-employee></div>`, */
