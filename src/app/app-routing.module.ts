import { ParametresComponent } from './parametres/parametres.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeTerrasComponent } from './resume-terras/resume-terras.component';
import { PageTerraComponent } from './page-terra/page-terra.component';
import { SocialLoginService } from 'src/services/social-login.service';
import { SocialLoginComponent } from './social-login/social-login.component';

const routes: Routes = [
  //{path: '', component: SocialLoginComponent},
  {path: 'all', component: ResumeTerrasComponent },
  {path: 'parametres', component: ParametresComponent, canActivate: [ SocialLoginService ] },
  {path: 'Terra/:id_terra', component: PageTerraComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
