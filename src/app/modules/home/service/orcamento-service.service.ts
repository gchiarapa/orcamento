import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OrcamentoMetricsValues } from '../../orcamento/model/orcamento-metricis-values';

@Injectable({
  providedIn: 'root'
})
export class OrcamentoServiceService {
  constructor() { }
  
  private metricas = new BehaviorSubject<OrcamentoMetricsValues[]>([]);
  metrics$ = this.metricas.asObservable();
  
  getOrcamentoValues(): OrcamentoMetricsValues[] {
    return this.metricas.getValue();
  }
  atualizaMetricas(values: OrcamentoMetricsValues[]) {
    this.metricas.next(values);
  }
}
