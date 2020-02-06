import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-comp',
  template: `
    <div *ngIf="true; then thenBlock else elseBlock"></div>
  <ng-template #thenBlock>Content to render when condition is true.</ng-template>
  <ng-template #elseBlock>Content to render when condition is false.</ng-template>
    <h4>NgIf</h4>
    <ul *ngFor="let person of peopleIf">
      <li *ngIf="person.age < 30"> (1)
        {{ person.name }} ({{ person.age }})
      </li>
    </ul>
    <h4>NgFor</h4>
    <ul>
      <li *ngFor="let person of people; let i = index">
        {{ i + 1 }} - {{ person.name }}
      </li>
      <li *ngFor="let person of people; let i = index"> (1)
        {{ i + 1 }} - {{ person.name }} (2)
      </li>
    </ul>
    <h4>NgFor (grouped)</h4>
    <ul *ngFor="let group of peopleByCountry"> (1)
      <li>{{ group.country }}</li>
      <ul>
        <li *ngFor="let person of group.people"> (2)
          {{ person.name }}
        </li>
      </ul>
    </ul>
    <!--<h4>NgSwitch</h4>
    <ul *ngFor="let person of people"
        [ngSwitch]="person.country"> (1)

      <li *ngSwitchCase="'UK'" (2)
          class="text-success">{{ person.name }} ({{ person.country }})
      </li>
      <li *ngSwitchCase="'USA'"
          class="text-primary">{{ person.name }} ({{ person.country }})
      </li>
      <li *ngSwitchCase="'HK'"
          class="text-danger">{{ person.name }} ({{ person.country }})
      </li>
      <li *ngSwitchDefault (3)
          class="text-warning">{{ person.name }} ({{ person.country }})
      </li>
    </ul>-->
  `
  ,
  styleUrls: ['./directives-comp.component.css']
})
export class DirectivesCompComponent  {

  constructor() { }

  /*ngOnInit() {
  }
*//*ngIf*/
  peopleIf: any[] = [
    {
      name: 'Douglas  Pace',
      age: 35
    },
    {
      name: 'Mcleod  Mueller',
      age: 32
    },
    {
      name: 'Day  Meyers',
      age: 21
    },
    {
      name: 'Aguirre  Ellis',
      age: 34
    },
    {
      name: 'Cook  Tyson',
      age: 32
    }
  ];
  /*ngFor*/
  people: any[] = [
    {
      name: 'Douglas  Pace'
    },
    {
      name: 'Mcleod  Mueller'
    },
    {
      name: 'Day  Meyers'
    },
    {
      name: 'Aguirre  Ellis'
    },
    {
      name: 'Cook  Tyson'
    }
  ];

  peopleByCountry: any[] = [
    {
      country: 'UK',
      people: [
        {
          name: 'Douglas  Pace'
        },
        {
          name: 'Mcleod  Mueller'
        },
      ]
    },
    {
      country: 'US',
      people: [
        {
          name: 'Day  Meyers'
        },
        {
          name: 'Aguirre  Ellis'
        },
        {
          name: 'Cook  Tyson'
        }
      ]
    }
  ];
 /* people: any[] = [
    {
      name: 'Douglas  Pace',
      age: 35,
      country: 'MARS'
    },
    {
      name: 'Mcleod  Mueller',
      age: 32,
      country: 'USA'
    },
    {
      name: 'Day  Meyers',
      age: 21,
      country: 'HK'
    },
    {
      name: 'Aguirre  Ellis',
      age: 34,
      country: 'UK'
    },
    {
     name: 'Cook  Tyson',
     age: 32,
     country: 'USA'
    }
  ];*/
}


