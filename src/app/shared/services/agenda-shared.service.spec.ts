import { TestBed } from '@angular/core/testing';
import { AgendaSharedService } from './agenda-shared.service';



describe('AgendaSharedServiceService', () => {
  let service: AgendaSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgendaSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
