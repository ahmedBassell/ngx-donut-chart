import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDonutChartComponent } from './ngx-donut-chart.component';

describe('NgxDonutChartComponent', () => {
  let component: NgxDonutChartComponent;
  let fixture: ComponentFixture<NgxDonutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDonutChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
