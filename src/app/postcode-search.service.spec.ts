import { TestBed } from '@angular/core/testing';
import { PostcodeSearchService } from './postcode-search.service';

describe('SearchServiceService', () => {
  let service: PostcodeSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostcodeSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
