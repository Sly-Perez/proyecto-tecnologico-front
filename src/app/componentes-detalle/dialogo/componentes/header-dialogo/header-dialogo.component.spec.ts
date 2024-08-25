import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDialogoComponent } from './header-dialogo.component';

describe('HeaderDialogoComponent', () => {
  let component: HeaderDialogoComponent;
  let fixture: ComponentFixture<HeaderDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderDialogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
