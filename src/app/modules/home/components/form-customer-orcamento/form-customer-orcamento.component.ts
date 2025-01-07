import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
//interface
import { OrcamentoCustomerValues } from 'src/app/modules/orcamento/model/orcamento-customer-values';
//Service
import { OrcamentoServiceService } from '../../service/orcamento-service.service';
import { Router } from '@angular/router';
import { OrcamentoMetricsValues } from 'src/app/modules/orcamento/model/orcamento-metricis-values';
import { EmailServiceService } from 'src/app/service/email/email-service.service';


@Component({
  selector: 'app-form-customer-orcamento',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-customer-orcamento.component.html',
  styleUrl: './form-customer-orcamento.component.css'
})
export class FormCustomerOrcamentoComponent implements OnInit {
  
  subscription: Subscription | undefined;

  constructor(private service : OrcamentoServiceService, private router: Router
    , private emailService: EmailServiceService
  ) {
    // this.subscription = service.metrics$.subscribe(
    //   values => {
    //     this.orcamentoCustomerValues.aluminiumValue = values.aluminiumValue
    //     this.orcamentoCustomerValues.workValue = values.workValue
    //   }
    // )
  }
  ngOnInit(): void {
      
  }

  public orcamentoCustomerValues: OrcamentoCustomerValues = {
    name : "",
    street: "",
    streetNumber: 0,
    state: "",
    city: "",
    CEP: "",
    email: "",
    cellphone: "",
    size: 0,
    aluminiumValue : 0,
    workValue: 0,
    total: 0
  };

  limparOrcamento() {
    this.orcamentoCustomerValues.name = "",
    this.orcamentoCustomerValues.street = "",
    this.orcamentoCustomerValues.streetNumber = 0,
    this.orcamentoCustomerValues.state = "",
    this.orcamentoCustomerValues.city = "",
    this.orcamentoCustomerValues.CEP = "",
    this.orcamentoCustomerValues.email = "",
    this.orcamentoCustomerValues.cellphone = "",
    this.orcamentoCustomerValues.size = 0,
    this.orcamentoCustomerValues.total = 0
  }

  gerarOrcamento() {
    console.log("iniciando funcao gerarOrcamento");
    const values = this.service.getOrcamentoValues();
    this.orcamentoCustomerValues.total = this.orcamentoCustomerValues.size * this.calcularOrcamento(values);
  }
  calcularOrcamento(values: OrcamentoMetricsValues[]): number {
    return values.reduce((total, value) => total + (value.aluminiumValue + value.workValue), 0);
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
  enviaOrcamentoEmail() {
    this.emailService.sendEmail(this.orcamentoCustomerValues.email, "Titulo Teste"
      , "Teste de email de orcamento"
    )
  }
  
}

