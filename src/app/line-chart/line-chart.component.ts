import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit, OnChanges {


  @Input() idTerra: string



  constructor() { 
  }


  ngOnInit() {
  }


  ngOnChanges(changes: SimpleChanges){
    // if (changes['idTerra']) {
    //   //console.log(this.idTerra);
    // }
  }


  // lineChart
  public lineChartData: ChartDataSets[] = [
    {data: [28, 27, 26, 26, 25, 24, 22], label: 'Temperature'},
    {data: [50, 52, 55, 55, 55, 50, 48], label: 'Hygrométrie'},
    //{data: [700, 600, 500, 400, 300, 200, 100], label: 'Luminosité'}
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions:any = {
    responsive: true
  };
  
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
 
  // events
  public chartClicked(e:any):void {
  }
 
  public chartHovered(e:any):void {
  }
}

