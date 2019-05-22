import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { AngularFirestore } from 'angularfire2/firestore';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit, OnChanges {


  @Input() idTerra: string

  tabDate     : Array<any>  = new Array<any>();
  tabTemp     : Array<any>  = new Array<any>();
  tabHygro    : Array<any>  = new Array<any>();

  constructor(private afs : AngularFirestore) { 
  }


  ngOnInit() {

    this.constructionTableauxMesures().then(
      (res : any) => {

        let tabDate     : Array<any>  = new Array<any>();
        let tabTemp     : Array<any>  = new Array<any>();
        let tabHygro    : Array<any>  = new Array<any>();

        let valeurDate  : any;

        // for (let mesure in res){
        //   valeurDate  = res[mesure].date.seconds;
        //   tabDate.push(valeurDate.toString());
        //   tabTemp.push(res[mesure].temperature);
        //   tabHygro.push(res[mesure].hygrometrie)
        // }

        let maDate ;
        let maDateString ;

        for (let mesure of res){
          valeurDate    = mesure.date.seconds;
          maDateString  = (this.toDateTime(valeurDate).toDateString() + " - "+ this.toDateTime(valeurDate).toTimeString()).substring(4, 23) ;

          tabDate.push(valeurDate.toString());
          tabTemp.push(mesure.temperature);
          tabHygro.push(mesure.hygrometrie);

          //this.lineChartLabels.push(this.toDateTime(valeurDate.toString()));
          this.lineChartLabels.push(maDateString);
        }

        this.tabDate  = tabDate;
        this.tabHygro = tabHygro;
        this.tabTemp  = tabTemp;

      }
    ).then(
      () => {

        this.lineChartData = [
          {data: this.tabTemp, label: 'Temperature'},
          {data: this.tabHygro, label: 'Hygrométrie'},
        ]; 
        
      }
    );

  }

  toDateTime(secs) {
    let t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);
    return t;
  }

  constructionTableauxMesures(){
    let promise               = new Promise(resolve => 
      {
        this.afs.collection('Terrarium/KreKAs5CarjyWiko68bv/Mesures').valueChanges().pipe(take(1)).toPromise()
        .then( (res : Array<any>) => {
          //console.log(res);
          resolve(res);
        });
      });

      return promise;
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
  ];

  //public lineChartLabels : Array<any>;
  public lineChartLabels:Array<any> = new Array();//['1', '2', '3'];

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

