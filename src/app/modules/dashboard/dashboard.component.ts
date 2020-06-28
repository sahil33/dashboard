import { Component, OnInit } from '@angular/core';

export interface SalesElement {
  sales: string;
  value: number;
}
const ELEMENT_DATA: SalesElement[] = [
  {sales: 'Sales Q1', value: 120},
  {sales: 'Sales Q2', value: 150},
  {sales: 'Sales Q3', value: 180},
  {sales: 'Sales Q4', value: 90}
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 
 public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
 public doughnutChartData = [120, 150, 180, 90];
 public doughnutChartType = 'doughnut';


 public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
 public pieChartData = [120, 150, 180, 90];
 public pieChartType = 'pie';


public lineChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
public lineChartData = [120, 150, 180, 90];
public lineChartType = 'line';


public barChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
public barChartData = [120, 150, 180, 90];
public barChartType = 'bar';


displayedColumns: string[] = ['sales', 'value'];
dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
