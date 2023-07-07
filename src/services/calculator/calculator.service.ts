import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number | null {
    if (b === 0) {
      throw new Error('No se puede dividir por cero');
    }
    return a / b;
  }
}
