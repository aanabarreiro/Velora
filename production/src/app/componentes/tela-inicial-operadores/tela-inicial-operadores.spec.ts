import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaInicialOperadores } from './tela-inicial-operadores';

describe('TelaInicialOperadores', () => {
  let component: TelaInicialOperadores;
  let fixture: ComponentFixture<TelaInicialOperadores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaInicialOperadores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaInicialOperadores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
