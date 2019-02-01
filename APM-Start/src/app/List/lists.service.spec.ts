/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListService } from './lists.service';

describe('Service: List', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListService]
    });
  });

  it('should ...', inject([ListService], (service: ListService) => {
    expect(service).toBeTruthy();
  }));
});
