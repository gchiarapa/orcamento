import { CommonModule, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
//interface
import { OrcamentoValues } from 'src/app/modules/orcamento/model/orcamento-values';


@Component({
  selector: 'app-form-metricas-orcamento',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-metricas-orcamento.component.html',
  styleUrl: './form-metricas-orcamento.component.css'
})
export class FormMetricasOrcamentoComponent implements OnInit {
limparOrcamewnto() {
  this.orcamentoValues = {
    aluminiumValue: 0,
    workValue: 0,
    size: 0,
    total: 0
  }
}
  gerarOrcamento() {
    this.orcamentoValues.total = this.orcamentoValues.aluminiumValue + this.orcamentoValues.workValue + this.orcamentoValues.size;
  }

  public orcamentoValues: OrcamentoValues = {
    aluminiumValue: 0,
    workValue: 0,
    size: 0,
    total: 0
  };

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
