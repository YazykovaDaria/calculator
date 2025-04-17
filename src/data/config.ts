export const configs = [
    {
        type: "size",
        key: "length",
        name: "Длина",
        min: 5,
        max: 50,
        step: 0.2,
    },
    {
        type: "size",
        key: "width",
        name: "Ширина",
        min: 5,
        max: 25,
        step: 0.2,
    },
    {
        type: "frame",
        key: "light",
        name: "Легкая",
        step: 1.2,
    },
    {
        type: "frame",
        key: "standard",
        name: "Стандартная",
        step: 1,
    },
    {
        type: "frame",
        key: "strong",
        name: "Усиленная",
        step: 0.8,
    },
    {
        type: "material",
        key: "metal",
        name: "Метал",
    },
    {
        type: "material",
        key: "plastic",
        name: "Пластик",
    },
    {
        type: "fix",
        key: "plastic",
        name: "Штук на кв. метр для пластиковых листов",
        value: 10,
    },
    {
        type: "fix",
        key: "metal",
        name: "Штук на кв. метр для металлических листов",
        value: 5,
    },
];
