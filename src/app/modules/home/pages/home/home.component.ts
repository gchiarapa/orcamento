import { Component } from '@angular/core';
import { AddButtonMetricasOrcamentoComponent } from '../../components/add-button-metricas-orcamento/add-button-metricas-orcamento.component';
import { FormMetricasOrcamentoComponent } from '../../components/form-metricas-orcamento/form-metricas-orcamento.component';
import { CalculateButtonOrcamentoComponent } from '../../components/calculate-button-orcamento/calculate-button-orcamento.component';
import { CalculateFormOrcamentoComponent } from '../../components/calculate-form-orcamento/calculate-form-orcamento.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FormCustomerOrcamentoComponent } from "../../components/form-customer-orcamento/form-customer-orcamento.component";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        HeaderComponent,
        AddButtonMetricasOrcamentoComponent,
        FormMetricasOrcamentoComponent,
        CalculateButtonOrcamentoComponent,
        CalculateFormOrcamentoComponent,
        FormCustomerOrcamentoComponent, 
        RouterModule
    ]
})
export class HomeComponent {

}
