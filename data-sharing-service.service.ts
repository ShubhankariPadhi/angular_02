import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class DataSharingServiceService {
  /*private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();*/
  constructor() {  console.log('Popcorn has been injected!');
  }

  cookPopcorn(qty) {
    console.log(qty, 'bags of popcorn cooked!');
  }
}
