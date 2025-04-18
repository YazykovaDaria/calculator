const minErr = "Минимально допустимое значение";
const maxErr = "Максимально допустимое значение";

export interface Validator {
    minValue: number;
    maxValue: number;
    numberErr: string;
    validate(val: string): string | null;
}

export class NumberValidator implements Validator {
    minValue: number;
    maxValue: number;
    numberErr: string;

    constructor(min: number, max: number) {
        this.minValue = min;
        this.maxValue = max;
        this.numberErr = "Введите число";
    }
    validate = (val: string): string | null => {
        const num = Number(val);

        switch (true) {
            case isNaN(num):
                return this.numberErr;
            case num < this.minValue:
                return `${minErr} ${this.minValue}`;
            case num > this.maxValue:
                return `${maxErr} ${this.maxValue}`;
            default:
                return null;
        }
    };
}
