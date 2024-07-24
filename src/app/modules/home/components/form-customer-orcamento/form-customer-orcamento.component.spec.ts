import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCustomerOrcamentoComponent } from './form-customer-orcamento.component';

describe('FormCustomerOrcamentoComponent', () => {
  let component: FormCustomerOrcamentoComponent;
  let fixture: ComponentFixture<FormCustomerOrcamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCustomerOrcamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCustomerOrcamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
