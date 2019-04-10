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
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider} from "angularx-social-login";
import { HttpClientModule } from '@angular/common/http';
import { SocialLoginComponent } from './social-login/social-login.component';


import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
export const firebaseConfig = environment.firebaseConfig;
import { AngularFirestoreModule } from 'angularfire2/firestore';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("Google-OAuth-Client-Id")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("2140536795993818")
  },
  {
    id: LinkedInLoginProvider.PROVIDER_ID,
    provider: new LinkedInLoginProvider("LinkedIn-client-Id", false, 'en_US')
  }
]);

export function provideConfig() {
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LineChartComponent,
    ParametresComponent,
    ResumeTerrasComponent,
    PageTerraComponent,
    SocialLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleChartsModule,
    SidebarModule,
    ChartsModule,
    NgbModule,
    SocialLoginModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [{
    provide: AuthServiceConfig,
      useFactory: provideConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
