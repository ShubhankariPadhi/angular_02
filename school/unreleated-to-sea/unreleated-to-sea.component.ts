import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unreleated-to-sea',
  templateUrl: './unreleated-to-sea.component.html',
  styleUrls: ['./unreleated-to-sea.component.css']
})
export class UnreleatedToSeaComponent implements OnInit {
  unreleatedSea = 'this is unreleated sea as child to school';
  constructor() { }

  ngOnInit() {
  }

}
