import { TestBed } from '@angular/core/testing';

import { ValueService } from './value.service';

describe('ValueService', () => {
  let service: ValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get observable value', (doneFn) => {
    service.getObservableValue().subscribe(value => {
      expect(value).toBe('observable value')
      doneFn();
    });
  });

  it('get promise value', (doneFn) => {
    service.getPromiseValue().then(value => {
      expect(value).toBe('promise value')
      doneFn();
    });
  });
});
