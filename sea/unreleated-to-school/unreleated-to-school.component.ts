import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-unreleated-to-school',
  templateUrl: './unreleated-to-school.component.html',
  styleUrls: ['./unreleated-to-school.component.css']
})
export class UnreleatedToSchoolComponent implements OnInit {
  @Output() receiveSeaAsChild;
  unreleatedSchool = this.receiveSeaAsChild;
  constructor() { }

  ngOnInit() {
  }

}
