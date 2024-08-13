import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoVentaComponent } from './calculo-venta.component';

describe('CalculoVentaComponent', () => {
  let component: CalculoVentaComponent;
  let fixture: ComponentFixture<CalculoVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculoVentaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculoVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
