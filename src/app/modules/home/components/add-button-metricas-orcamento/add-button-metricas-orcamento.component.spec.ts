import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddButtonMetricasOrcamentoComponent } from './add-button-metricas-orcamento.component';

describe('AddButtonMetricasOrcamentoComponent', () => {
  let component: AddButtonMetricasOrcamentoComponent;
  let fixture: ComponentFixture<AddButtonMetricasOrcamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddButtonMetricasOrcamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddButtonMetricasOrcamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
