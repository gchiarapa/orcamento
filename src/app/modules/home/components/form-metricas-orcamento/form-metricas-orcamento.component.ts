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
    aluminiumValue: 0,
    workValue: 0
  }
}
  atualizarOrcamentoMetricas() {
    console.log("Before update: " , this.orcamentoValues);
    this.service.atualizaMetricas(this.orcamentoValues);
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


