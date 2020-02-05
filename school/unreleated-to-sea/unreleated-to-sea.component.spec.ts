import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnreleatedToSeaComponent } from './unreleated-to-sea.component';

describe('UnreleatedToSeaComponent', () => {
  let component: UnreleatedToSeaComponent;
  let fixture: ComponentFixture<UnreleatedToSeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnreleatedToSeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnreleatedToSeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
