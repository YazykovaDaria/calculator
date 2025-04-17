import { TableCell, TableRow } from "flowbite-react";
import { useAppSelector } from "@entities";
import { calculateList, calculateScrews } from "@shared";
import { data, configs } from "@data";
import { AddButton } from "./add-button";
import { useAppDispatch, addBucketItem } from "@entities";

type ListRowProps = {
    area: number;
};

const screw = data.find((item) => item.type === "fix");

export const ListRow = ({ area }: ListRowProps) => {
    const list = useAppSelector((state) => state.list.list);
    const dispatch = useAppDispatch();

    if (!list) return null;

    const { cost, listsNeeded } = calculateList({
        listCost: list.price,
        listWidth: list.width,
        area,
    });

    const setScrewArgs = () => {
        const cost = screw?.price as number;
        const value = configs.find(
            (item) => item.type === "fix" && item.key === list.material
        );
        return {
            area,
            cost,
            val: value?.value as number,
        };
    };
    const { price, screwsNeded } = calculateScrews(setScrewArgs());

    const handleAddList = () => {
        const data = {
            name: list.name,
            cost,
            unit: list.unit,
            quantity: listsNeeded,
        };
        dispatch(addBucketItem(data));
    };

    const handleAddScrew = () => {
        const data = {
            name: screw?.name ?? "",
            cost: price,
            unit: screw?.unit ?? "",
            quantity: screwsNeded,
        };
        dispatch(addBucketItem(data));
    };

    return (
        <>
            <TableRow className="bg-white">
                <TableCell className="whitespace-nowrap font-medium text-gray-950">
                    {list.name}
                </TableCell>
                <TableCell>{list.unit}</TableCell>
                {area > 1 && (
                    <>
                        <TableCell>{listsNeeded}</TableCell>
                        <TableCell>{cost}</TableCell>
                        <TableCell>
                            <AddButton onClick={handleAddList}></AddButton>
                        </TableCell>
                    </>
                )}
            </TableRow>

            <TableRow className="bg-white">
                <TableCell className="whitespace-nowrap font-medium text-gray-950">
                    {screw?.name}
                </TableCell>
                <TableCell>{screw?.unit}</TableCell>
                {area > 1 && (
                    <>
                        <TableCell>{screwsNeded}</TableCell>
                        <TableCell>{price}</TableCell>
                        <TableCell>
                            <AddButton onClick={handleAddScrew}></AddButton>
                        </TableCell>
                    </>
                )}
            </TableRow>
        </>
    );
};
