import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//Modules
import { HomeComponent } from './modules/home/pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormMetricasOrcamentoComponent } from './modules/home/components/form-metricas-orcamento/form-metricas-orcamento.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeComponent,
    FormsModule,
    NgbModule, 
    HttpClientModule
  ],
  providers: [
    FormMetricasOrcamentoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
