import { TestBed } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deberia multiplicar dos ceros y obtener cero', () => {
    expect(service.multiply(0, 0)).toEqual(0);
  });

  it('deberia multiplicar un numero grande', () => {
    expect(service.multiply(30000000, 5)).toEqual(150000000);
  });

  it('deberia multiplicar un numero negativo', () => {
    expect(service.multiply(-3, 5)).toEqual(-15);
  });

  it('deberia dividir dos numeros positivos diferentes a cero', () => {
    expect(service.divide(6, 3)).toEqual(2);
  });

  it('deberia lanzar una excepcion cuando el divisor es cero', () => {
    expect(() => service.divide(6, 0)).toThrowError('No se puede dividir por cero');
  });
});
