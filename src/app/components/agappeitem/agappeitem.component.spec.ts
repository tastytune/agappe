import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgappeitemComponent } from './agappeitem.component';

describe('AgappeitemComponent', () => {
  let component: AgappeitemComponent;
  let fixture: ComponentFixture<AgappeitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgappeitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgappeitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
