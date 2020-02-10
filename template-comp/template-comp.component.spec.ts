import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCompComponent } from './template-comp.component';

describe('TemplateCompComponent', () => {
  let component: TemplateCompComponent;
  let fixture: ComponentFixture<TemplateCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
