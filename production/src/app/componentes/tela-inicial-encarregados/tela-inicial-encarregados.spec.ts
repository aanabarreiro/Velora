import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaInicialEncarregados } from './tela-inicial-encarregados';

describe('TelaInicialEncarregados', () => {
  let component: TelaInicialEncarregados;
  let fixture: ComponentFixture<TelaInicialEncarregados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaInicialEncarregados]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaInicialEncarregados);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
