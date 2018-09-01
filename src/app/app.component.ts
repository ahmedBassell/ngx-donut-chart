import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'ngx-donutchart';
  pieChartData = [
    {
      label: 'New',
      value: 5,
      color: '#FFC568',
    },
    {
      label: 'Follow Up',
      value: 13,
      color: '#95D6B7',
    },
    {
      label: 'Surgery',
      value: 5,
      color: '#B8CAF7',
    },
  ];
}
