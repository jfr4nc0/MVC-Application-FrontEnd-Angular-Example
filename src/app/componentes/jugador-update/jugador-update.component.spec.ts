import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorUpdateComponent } from './jugador-update.component';

describe('JugadorUpdateComponent', () => {
  let component: JugadorUpdateComponent;
  let fixture: ComponentFixture<JugadorUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugadorUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JugadorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
