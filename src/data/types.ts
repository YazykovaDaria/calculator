export type Product = {
    type: string;
    name: string;
    material?: string;
    unit: string;
    width: number;
    price: number;
};

export type Material = {
    type: string;
    key: string;
    name: string;
};

export type Fix = Material & { value: number };
export type Frame = Material & { step: number };
export type Size = Material & {
    min: number;
    max: number;
    step: number;
};
