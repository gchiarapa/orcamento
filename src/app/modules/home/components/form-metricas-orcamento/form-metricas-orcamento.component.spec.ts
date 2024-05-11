import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMetricasOrcamentoComponent } from './form-metricas-orcamento.component';

describe('FormMetricasOrcamentoComponent', () => {
  let component: FormMetricasOrcamentoComponent;
  let fixture: ComponentFixture<FormMetricasOrcamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormMetricasOrcamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormMetricasOrcamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
