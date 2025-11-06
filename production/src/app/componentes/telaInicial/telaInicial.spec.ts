import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { TelaInicial } from '../telaInicial/telaInicial'


describe('TelaInicial', () => {
  let component: TelaInicial;
  let fixture: ComponentFixture<TelaInicial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelaInicial], // ✅ para componente normal
      imports: [CommonModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TelaInicial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
