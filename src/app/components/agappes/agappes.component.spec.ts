import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgappesComponent } from './agappes.component';

describe('AgappesComponent', () => {
  let component: AgappesComponent;
  let fixture: ComponentFixture<AgappesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgappesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgappesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
