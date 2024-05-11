import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateButtonOrcamentoComponent } from './calculate-button-orcamento.component';

describe('CalculateButtonOrcamentoComponent', () => {
  let component: CalculateButtonOrcamentoComponent;
  let fixture: ComponentFixture<CalculateButtonOrcamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculateButtonOrcamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculateButtonOrcamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
