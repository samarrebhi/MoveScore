import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewPageComponent } from './new-page/new-page.component';
import { LoginComponent } from './login/login.component';
import { Offre1Component } from './offre1/offre1.component';
import { Offre2Component } from './offre2/offre2.component';
import { Offre3Component } from './offre3/offre3.component';
import { Offre4Component } from './offre4/offre4.component';
import { Offre5Component } from './offre5/offre5.component';
import { Offre6Component } from './offre6/offre6.component';
import { FirstComponent } from './first/first.component';
import { AuthAdmiComponent } from './auth-admi/auth-admi.component';
import { resultsComponent } from './results/results.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ChoixAdminComponent } from './choix-admin/choix-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NewPageComponent,
    LoginComponent,
    Offre1Component,
    Offre2Component,
    Offre3Component,
    Offre4Component,
    Offre5Component,
    Offre6Component,
    FirstComponent,
    AuthAdmiComponent,
    resultsComponent,
    ConfirmationComponent,
    ChoixAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
