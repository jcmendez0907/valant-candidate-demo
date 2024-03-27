import { TestBed } from '@angular/core/testing';
import { MazeService } from './maze.service';
import { ValantDemoApiClient } from '../api-client/api-client';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MazeService', () => {
  let service: MazeService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MazeService, ValantDemoApiClient.Client]
    });
    service = TestBed.inject(MazeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
