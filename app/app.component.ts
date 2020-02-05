import { Component } from '@angular/core';

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
