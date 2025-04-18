import { calculateScrews } from "@shared";
import { data, configs } from "@data";
import { TableRowItem } from "./table-row";

type ListRowProps = {
    area: number;
    listMaterial: string;
};

const screw = data.find((item) => item.type === "fix");

export const ScrewRow = ({ area, listMaterial }: ListRowProps) => {
    if (!screw) return null;

    const setScrewArgs = () => {
        const cost = screw.price;
        const value = configs.find(
            (item) => item.type === "fix" && item.key === listMaterial
        );
        return {
            area,
            cost,
            val: value?.value as number,
        };
    };
    const { totalScrews, totalScrewsPrice } = calculateScrews(setScrewArgs());

    return (
        <TableRowItem
            name={screw?.name}
            unit={screw.unit}
            cost={area > 1 ? totalScrewsPrice : 0}
            quantity={totalScrews}
        ></TableRowItem>
    );
};
