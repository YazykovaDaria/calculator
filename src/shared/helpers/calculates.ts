export const calculateArea = (width: number, height: number) => {
    return width * height;
};

type CalculateListArgs = {
    listWidth: number;
    listLenght?: number;
    area: number;
    listCost: number;
};
export const calculateList = ({
    listWidth,
    listLenght = 1,
    area,
    listCost,
}: CalculateListArgs) => {
    const listArea = calculateArea(listWidth, listLenght);
    const listsNeeded = Math.ceil(area / listArea);
    const cost = listsNeeded * listCost;

    return { cost, listsNeeded };
};

type ScrewsArgs = {
    area: number;
    cost: number;
    val: number;
};

export const calculateScrews = ({ area, cost, val }: ScrewsArgs) => {
    const screwsNeded = Math.ceil(area * val);
    const price = cost * screwsNeded;

    return { price, screwsNeded };
};
