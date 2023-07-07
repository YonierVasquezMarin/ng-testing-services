import { TestBed } from '@angular/core/testing';

import { MasterService } from './master.service';

describe('MasterService', () => {
  let service: MasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deberia llamar getValue de ValueService', () => {
    const valueServiceSpy = jasmine.createSpyObj('ValueService', ['getValue']);
    const masterService = new MasterService(valueServiceSpy);

    valueServiceSpy.getValue.and.returnValue('fake value');

    expect(masterService.getValue()).toBe('fake value');
    expect(valueServiceSpy.getValue).toHaveBeenCalled();
    expect(valueServiceSpy.getValue).toHaveBeenCalledTimes(1);
  });
});
