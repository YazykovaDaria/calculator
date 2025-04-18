import { data } from "@data";
import { getMaterialName } from "@shared";
import { Label, Radio } from "flowbite-react";
import { setList, useAppDispatch } from "@entities";

const lists = data.filter((list) => list.type === "list");

export const ListChoise = () => {
    const dispatch = useAppDispatch();

    return (
        <section>
            <h2 className="font-semibold">Выберите лист покрытия</h2>
            <ul className="flex flex-col gap-3 mt-4">
                {lists.map((list) => {
                    const material = getMaterialName(list.material as string);
                    return (
                        <li className="flex items-center gap-2" key={list.name}>
                            <Radio
                                id={list.name}
                                name="list"
                                value={list.name}
                                onChange={() => dispatch(setList(list))}
                            />
                            <Label htmlFor={list.name}>
                                <div className="flex gap-2 flex-wrap">
                                    <span>{list.name}</span>
                                    {material && (
                                        <span>{`Материал: ${material}`}</span>
                                    )}
                                    <span>{`Цена: ${list.price}`}</span>
                                </div>
                            </Label>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};
