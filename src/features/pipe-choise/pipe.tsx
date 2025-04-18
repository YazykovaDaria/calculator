import { data } from "@data";
import { Label, Radio } from "flowbite-react";
import { setPipe, useAppDispatch } from "@entities";

const pipes = data.filter((item) => item.type === "pipe");

export const PipeChoise = () => {
    const dispatch = useAppDispatch();

    return (
        <section>
            <h2 className="font-semibold">Выберите трубу</h2>
            <ul className="flex flex-col gap-3 mt-4">
                {pipes.map((item) => {
                    return (
                        <li className="flex items-center gap-2" key={item.name}>
                            <Radio
                                id={item.name}
                                name="pipe"
                                value={item.name}
                                onChange={() => dispatch(setPipe(item))}
                            />
                            <Label htmlFor={item.name}>
                                <div className="flex gap-2 flex-wrap">
                                    <span>{item.name}</span>
                                    <span>{`Цена: ${item.price}`}</span>
                                </div>
                            </Label>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};
