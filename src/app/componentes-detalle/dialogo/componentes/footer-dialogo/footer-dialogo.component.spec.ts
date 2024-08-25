import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDialogoComponent } from './footer-dialogo.component';

describe('FooterDialogoComponent', () => {
  let component: FooterDialogoComponent;
  let fixture: ComponentFixture<FooterDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterDialogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
