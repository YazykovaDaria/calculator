import { useAppSelector } from "@entities";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeadCell,
    TableRow,
} from "flowbite-react";

export const BucketPage = () => {
    const items = useAppSelector((state) => state.bucket);
    if (items.length === 0)
        return (
            <p className="font-semibold text-xl text-center mt-6">
                Нет товаров в корзине
            </p>
        );

    const totalPrice = items.reduce((acc, item) => {
        acc += item.cost;
        return acc;
    }, 0);

    return (
        <section className="flex flex-col gap-4 px-3 py-6">
            <h2 className="font-semibold text-xl text-center">Корзина</h2>
            <div className="overflow-x-auto">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeadCell>Наименование</TableHeadCell>
                            <TableHeadCell>ед.</TableHeadCell>
                            <TableHeadCell>кол-во</TableHeadCell>
                            <TableHeadCell>сумма</TableHeadCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="divide-y">
                        {items.map((item, i) => (
                            <TableRow className="bg-white" key={i}>
                                <TableCell className="whitespace-nowrap font-medium text-gray-950">
                                    {item.name}
                                </TableCell>
                                <TableCell>{item.unit}</TableCell>

                                <TableCell>{item.quantity}</TableCell>
                                <TableCell>{item.cost}</TableCell>
                            </TableRow>
                        ))}
                        <TableRow className="whitespace-nowrap font-medium text-gray-950">
                            <TableCell colSpan={3}>Итого:</TableCell>

                            <TableCell>{totalPrice}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </section>
    );
};
