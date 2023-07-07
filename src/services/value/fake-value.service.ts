export class FakeValueService {
    value = 'faked service value';

    getValue() {
        return this.value;
    }

    setValue(value: string) {
        this.value = value;
    }

    getPromiseValue() {
        return Promise.resolve('promise fake value');
    }
}