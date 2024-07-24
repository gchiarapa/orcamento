import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//Pages
import { HomeComponent } from "./modules/home/pages/home/home.component";
import { FormMetricasOrcamentoComponent } from "./modules/home/components/form-metricas-orcamento/form-metricas-orcamento.component";
import { FormCustomerOrcamentoComponent } from "./modules/home/components/form-customer-orcamento/form-customer-orcamento.component";


const routes: Routes = [
    {
        path: '', component: HomeComponent,
    }, 
    {
        path: 'metrics', component: FormMetricasOrcamentoComponent
    },
    {
        path: 'customer', component: FormCustomerOrcamentoComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}