import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { OrcamentoComponent } from './solicitar-orcamento/solicitar-orcamento.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { MaterialComponent } from './material/material.component';
import { AcabamentoComponent } from './acabamento/acabamento.component';
import { CorComponent } from './cor/cor.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrcamentoComponent,
    LoginComponent,
    TecnologiaComponent,
    MaterialComponent,
    AcabamentoComponent,
    CorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    FormsModule,

    MatMenuModule,
    AppRoutingModule,
    NgxSpinnerModule,
    AmplifyAuthenticatorModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
