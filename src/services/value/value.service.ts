import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValueService {
  value = 'real value';

  getValue() {
    return this.value;
  }

  setValue(value: string) {
    this.value = value;
  }

  getObservableValue() {
    return of('observable value');
  }

  getPromiseValue() {
    return Promise.resolve('promise value');
  }
}
