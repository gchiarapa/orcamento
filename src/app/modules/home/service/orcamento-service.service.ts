import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { OrcamentoMetricsValues } from '../../orcamento/model/orcamento-metricis-values';

@Injectable({
  providedIn: 'root'
})
export class OrcamentoServiceService {
  constructor() { }
  
  private metricas = new Subject<OrcamentoMetricsValues>();
  
  metrics$ = this.metricas.asObservable();
  
  getOrcamentoValues() {
    return this.metricas.asObservable();
  }
  atualizaMetricas(values: OrcamentoMetricsValues) {
    this.metricas.next(values);
  }
}
