import { ParametresComponent } from './parametres/parametres.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeTerrasComponent } from './resume-terras/resume-terras.component';
import { PageTerraComponent } from './page-terra/page-terra.component';

const routes: Routes = [
  {path: 'all', component: ResumeTerrasComponent},
  {path: 'parametres', component: ParametresComponent },
  {path: 'Terra/:id_terra', component: PageTerraComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
