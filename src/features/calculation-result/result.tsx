import {
    Table,
    TableBody,
    TableHead,
    TableHeadCell,
    TableRow,
} from "flowbite-react";
import { useAppSelector } from "@entities";
import { calculateArea } from "@shared";
import { PipeRow } from "./pipe-row";
import { ListRow } from "./list-row";

export const Result = () => {
    const sizes = useAppSelector((state) => state.sizes);
    const frame = useAppSelector((state) => state.frame.frame);

    const { width, length } = sizes;
    const area = calculateArea(width, length);

    return (
        <section className="flex flex-col gap-4">
            <h2 className="font-semibold text-xl">Результат</h2>
            <div>
                <p>{`Площадь покрытия: ${area > 1 ? area : 0} м²`}</p>
                <p>{`Размер ячейки: ${
                    frame ? `${frame.step} х ${frame.step}` : "0"
                } м`}</p>
            </div>
            <div className="overflow-x-auto">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeadCell>Наименование</TableHeadCell>
                            <TableHeadCell>ед.</TableHeadCell>
                            <TableHeadCell>кол-во</TableHeadCell>
                            <TableHeadCell>сумма</TableHeadCell>
                            <TableHeadCell>
                                <span className="sr-only">Корзина</span>
                            </TableHeadCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="divide-y">
                        <ListRow area={area}></ListRow>
                        <PipeRow
                            width={width}
                            length={length}
                            step={frame?.step}
                        ></PipeRow>
                    </TableBody>
                </Table>
            </div>
        </section>
    );
};
