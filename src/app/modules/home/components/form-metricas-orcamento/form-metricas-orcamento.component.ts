import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit, Output, EventEmitter} from '@angular/core';
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

  @Output() metricas = new EventEmitter<{aluminiumValue: number, workValue: number}>();
  
  constructor(private service : OrcamentoServiceService, private router: Router) {
    
  }
  ngOnInit(): void {
  
  }

  limparMetricasOrcamento() {
  this.orcamentoValues = {
    aluminiumValue: "",
    workValue: ""
  }
}
  atualizarOrcamentoMetricas() {
    this.service.atualizaMetricas(this.orcamentoValues);
  }

  public orcamentoValues: OrcamentoMetricsValues = {
    aluminiumValue: "",
    workValue: ""
  };


  getOrcamentoMetricas() {
    return this.orcamentoValues;
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

}


