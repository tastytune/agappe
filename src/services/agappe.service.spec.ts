import { TestBed } from '@angular/core/testing';

import { AgappeService } from './agappe.service';

describe('AgappeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgappeService = TestBed.get(AgappeService);
    expect(service).toBeTruthy();
  });
});
