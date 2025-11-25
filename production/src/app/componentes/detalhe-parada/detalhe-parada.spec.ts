import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheParada } from './detalhe-parada';

describe('DetalheParada', () => {
  let component: DetalheParada;
  let fixture: ComponentFixture<DetalheParada>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalheParada]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheParada);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
