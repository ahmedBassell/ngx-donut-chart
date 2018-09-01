import { TestBed, inject } from '@angular/core/testing';

import { NgxDonutChartService } from './ngx-donut-chart.service';

describe('NgxDonutChartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxDonutChartService]
    });
  });

  it('should be created', inject([NgxDonutChartService], (service: NgxDonutChartService) => {
    expect(service).toBeTruthy();
  }));
});
