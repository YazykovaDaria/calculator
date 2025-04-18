import { useAppSelector } from "@entities";
import { calculateList } from "@shared";
import { TableRowItem } from "./table-row";
import { ScrewRow } from "./screw-row";

type ListRowProps = {
    area: number;
};

export const ListRow = ({ area }: ListRowProps) => {
    const list = useAppSelector((state) => state.list.list);

    if (!list) return null;

    const { totalListPrice, totalLists } = calculateList({
        listCost: list.price,
        listWidth: list.width,
        area,
    });

    return (
        <>
            <TableRowItem
                name={list.name}
                unit={list.unit}
                cost={area > 1 ? totalListPrice : 0}
                quantity={totalLists}
            ></TableRowItem>
            <ScrewRow
                area={area}
                listMaterial={list.material as string}
            ></ScrewRow>
        </>
    );
};
