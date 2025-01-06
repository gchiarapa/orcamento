import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
//interface
import { OrcamentoCustomerValues } from 'src/app/modules/orcamento/model/orcamento-customer-values';
//Service
import { OrcamentoServiceService } from '../../service/orcamento-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-customer-orcamento',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-customer-orcamento.component.html',
  styleUrl: './form-customer-orcamento.component.css'
})
export class FormCustomerOrcamentoComponent implements OnInit {
  
  subscription: Subscription | undefined;

  constructor(private service : OrcamentoServiceService, private router: Router) {
    this.subscription = service.metrics$.subscribe(
      values => {
        this.orcamentoCustomerValues.aluminiumValue = values.aluminiumValue
        this.orcamentoCustomerValues.workValue = values.workValue
      }
    )
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

  limparOrcamewnto() {
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
    this.service.metrics$.subscribe(value => {
      console.log("Valores dos custos para gerar orcamento: ", value);
      this.orcamentoCustomerValues.aluminiumValue = value.aluminiumValue
      this.orcamentoCustomerValues.workValue = value.workValue
      let total = this.orcamentoCustomerValues.size * (
        this.orcamentoCustomerValues.aluminiumValue + this.orcamentoCustomerValues.workValue);
      this.orcamentoCustomerValues.total = total;
      console.log(this.orcamentoCustomerValues);
    })
    
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  
}

