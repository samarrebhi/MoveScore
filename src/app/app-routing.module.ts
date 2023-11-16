import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewPageComponent } from './new-page/new-page.component';
import { Offre1Component } from './offre1/offre1.component';
import { Offre2Component } from './offre2/offre2.component';
import { Offre3Component } from './offre3/offre3.component';
import { Offre4Component } from './offre4/offre4.component';
import { Offre5Component } from './offre5/offre5.component';
import { Offre6Component } from './offre6/offre6.component';
import { AuthAdmiComponent } from './auth-admi/auth-admi.component';
import { LoginComponent } from './login/login.component';
import { FirstComponent } from './first/first.component';
import {resultsComponent } from './results/results.component';
import { ChoixAdminComponent } from './choix-admin/choix-admin.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'new-page', component: NewPageComponent },
  { path: 'first', component: FirstComponent },
  { path: 'results', component: resultsComponent},
  { path: 'auth-admi', component: AuthAdmiComponent },
  { path: 'choix-admin', component: ChoixAdminComponent },
  { path: 'offre1', component: Offre1Component }, 
  { path: 'offre2', component: Offre2Component }, 
  { path: 'offre3', component: Offre3Component },
  { path: 'offre4', component: Offre4Component },
  { path: 'offre5', component: Offre5Component },
  { path: 'offre6', component: Offre6Component },
  { path: '', redirectTo: '/first', pathMatch: 'full' },
   // Default route to the first page page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents=[Offre1Component,Offre2Component,Offre3Component,Offre4Component,Offre5Component,Offre6Component]
