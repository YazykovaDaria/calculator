export const calculateArea = (width: number, height: number) => {
    return width * height;
};

const roundToTwo = (num: number) => {
    return Math.round(num * 100) / 100;
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
    const totalLists = Math.ceil(area / listArea);
    const totalListPrice = roundToTwo(totalLists * listCost);

    return { totalListPrice, totalLists };
};

type ScrewsArgs = {
    area: number;
    cost: number;
    val: number;
};

export const calculateScrews = ({ area, cost, val }: ScrewsArgs) => {
    const totalScrews = Math.ceil(area * val);
    const totalScrewsPrice = roundToTwo(cost * totalScrews);

    return { totalScrews, totalScrewsPrice };
};

type PipeArgs = {
    pipeWidth: number;
    step: number;
    width: number;
    length: number;
    price: number;
};

export const calculatePipes = ({
    pipeWidth,
    step,
    width,
    length,
    price,
}: PipeArgs) => {
    const pipeWidthM = pipeWidth / 1000;
    const totalStep = step + pipeWidthM;
    const horizontalLength = (width - pipeWidthM) / totalStep + 1;
    const verticalLength = (length - pipeWidthM) / totalStep + 1;

    const totalPipeLength = horizontalLength * length + verticalLength * width;

    const totalPipePrice = roundToTwo(totalPipeLength * price);
    return { totalPipeLength: Math.ceil(totalPipeLength), totalPipePrice };
};
