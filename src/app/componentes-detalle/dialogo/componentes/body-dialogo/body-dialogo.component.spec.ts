import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyDialogoComponent } from './body-dialogo.component';

describe('BodyDialogoComponent', () => {
  let component: BodyDialogoComponent;
  let fixture: ComponentFixture<BodyDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BodyDialogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
