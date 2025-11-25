import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducaoIniciada } from './producao-iniciada';

describe('ProducaoIniciada', () => {
  let component: ProducaoIniciada;
  let fixture: ComponentFixture<ProducaoIniciada>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProducaoIniciada]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducaoIniciada);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
