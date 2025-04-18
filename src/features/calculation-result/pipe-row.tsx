import { useAppSelector } from "@entities";
import { calculatePipes } from "@shared";
import { TableRowItem } from "./table-row";

type PipeProps = {
    width: number;
    length: number;
    step?: number;
};

export const PipeRow = ({ width, length, step }: PipeProps) => {
    const pipe = useAppSelector((state) => state.pipe.pipe);

    if (!pipe) return null;

    const { totalPipeLength, totalPipePrice } = calculatePipes({
        pipeWidth: pipe.width,
        step: step ?? 1,
        width,
        length,
        price: pipe.price,
    });

    return (
        <TableRowItem
            name={pipe.name}
            unit={pipe.unit}
            cost={width > 1 && length > 1 ? totalPipePrice : 0}
            quantity={step ? totalPipeLength : 0}
        ></TableRowItem>
    );
};
