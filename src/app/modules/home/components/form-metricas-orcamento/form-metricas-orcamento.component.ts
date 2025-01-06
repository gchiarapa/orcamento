import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
//interface
import { OrcamentoServiceService } from '../../service/orcamento-service.service';
import { OrcamentoMetricsValues } from 'src/app/modules/orcamento/model/orcamento-metricis-values';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-metricas-orcamento',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-metricas-orcamento.component.html',
  styleUrl: './form-metricas-orcamento.component.css'
})
export class FormMetricasOrcamentoComponent implements OnInit {

  values: OrcamentoMetricsValues[] = [];
  
  constructor(private service : OrcamentoServiceService, private router: Router) {
    
  }
  ngOnInit(): void {
  
  }

  limparMetricasOrcamento() {
  this.orcamentoValues = {
    aluminiumValue: 0,
    workValue: 0
  }
}
  atualizarOrcamentoMetricas() {
    console.log("Before update: " , this.orcamentoValues);
    const newValues: OrcamentoMetricsValues = {
      aluminiumValue: this.orcamentoValues.aluminiumValue,
      workValue: this.orcamentoValues.workValue
    }
    this.values.push(newValues);
    this.service.atualizaMetricas(this.values);
    console.log("After update: " , this.orcamentoValues);
  }

  public orcamentoValues: OrcamentoMetricsValues = {
    aluminiumValue: 0,
    workValue: 0
  };


  getOrcamentoMetricas() {
    return this.orcamentoValues;
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

}


