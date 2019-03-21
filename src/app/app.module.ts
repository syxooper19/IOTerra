import { GoogleChartsModule } from '../../node_modules/angular-google-charts';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarModule } from 'ng-sidebar';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ParametresComponent } from './parametres/parametres.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResumeTerrasComponent } from './resume-terras/resume-terras.component';
import { PageTerraComponent } from './page-terra/page-terra.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LineChartComponent,
    ParametresComponent,
    ResumeTerrasComponent,
    PageTerraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleChartsModule,
    SidebarModule,
    ChartsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
