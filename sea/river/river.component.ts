import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-river',
  templateUrl: './river.component.html',
  styleUrls: ['./river.component.css']
})
export class RiverComponent implements OnInit {
riverVariable = 'this is river variable  child of sea'
  constructor() { }

  ngOnInit() {
  }

}
