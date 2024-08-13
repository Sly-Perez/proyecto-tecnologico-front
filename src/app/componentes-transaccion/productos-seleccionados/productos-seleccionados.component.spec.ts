import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosSeleccionadosComponent } from './productos-seleccionados.component';

describe('ProductosSeleccionadosComponent', () => {
  let component: ProductosSeleccionadosComponent;
  let fixture: ComponentFixture<ProductosSeleccionadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductosSeleccionadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosSeleccionadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
