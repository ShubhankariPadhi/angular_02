import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnreleatedToSchoolComponent } from './unreleated-to-school.component';

describe('UnreleatedToSchoolComponent', () => {
  let component: UnreleatedToSchoolComponent;
  let fixture: ComponentFixture<UnreleatedToSchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnreleatedToSchoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnreleatedToSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
