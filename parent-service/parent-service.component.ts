import { Component, OnInit } from '@angular/core';
import {DataSharingServiceService} from '../data-sharing-service.service';

@Component({
  selector: 'app-parent-service',
  templateUrl: './parent-service.component.html',
  styleUrls: ['./parent-service.component.css'],
  providers: [DataSharingServiceService]
})
export class ParentServiceComponent implements OnInit {

  constructor(private popcorn: DataSharingServiceService) { }

  ngOnInit() {
  }
  cookIt(qty) {
    this.popcorn.cookPopcorn(qty);
  }
}
