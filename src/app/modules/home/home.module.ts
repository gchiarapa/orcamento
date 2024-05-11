import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddButtonMetricasOrcamentoComponent } from './components/add-button-metricas-orcamento/add-button-metricas-orcamento.component';
import { CalculateButtonOrcamentoComponent } from './components/calculate-button-orcamento/calculate-button-orcamento.component';
import { CalculateFormOrcamentoComponent } from './components/calculate-form-orcamento/calculate-form-orcamento.component';
import { FormMetricasOrcamentoComponent } from './components/form-metricas-orcamento/form-metricas-orcamento.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HeaderComponent,AddButtonMetricasOrcamentoComponent, CalculateButtonOrcamentoComponent, CalculateFormOrcamentoComponent, 
  FormMetricasOrcamentoComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
