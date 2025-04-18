import { TableCell, TableRow } from "flowbite-react";
import { AddButton } from "./add-button";
import { useAppDispatch, addBucketItem } from "@entities";

type TableRowProps = {
    name: string;
    cost: number;
    unit: string;
    quantity: number;
};

export const TableRowItem = ({ name, cost, unit, quantity }: TableRowProps) => {
    const handleAddBucketItem = () => {
        const data = {
            name,
            cost: cost ?? 0,
            unit,
            quantity: quantity ?? 0,
        };
        dispatch(addBucketItem(data));
    };

    const dispatch = useAppDispatch();
    return (
        <TableRow className="bg-white">
            <TableCell className="whitespace-nowrap font-medium text-gray-950">
                {name}
            </TableCell>
            <TableCell>{unit}</TableCell>
            {quantity > 0 && cost > 0 && (
                <>
                    <TableCell>{quantity}</TableCell>
                    <TableCell>{cost}</TableCell>
                    <TableCell>
                        <AddButton onClick={handleAddBucketItem}></AddButton>
                    </TableCell>
                </>
            )}
        </TableRow>
    );
};
