import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateFormOrcamentoComponent } from './calculate-form-orcamento.component';

describe('CalculateFormOrcamentoComponent', () => {
  let component: CalculateFormOrcamentoComponent;
  let fixture: ComponentFixture<CalculateFormOrcamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculateFormOrcamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculateFormOrcamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
