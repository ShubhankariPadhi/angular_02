import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormCompComponent } from './template-driven-form-comp.component';

describe('TemplateDrivenFormCompComponent', () => {
  let component: TemplateDrivenFormCompComponent;
  let fixture: ComponentFixture<TemplateDrivenFormCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenFormCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFormCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
