import { configs } from "@data";
import { Label, Radio } from "flowbite-react";
import { useAppDispatch, setFrame } from "@entities";

const frames = configs.filter((item) => item.type === "frame");

export const FrameChoise = () => {
    const dispatch = useAppDispatch();

    return (
        <section>
            <h2 className="font-semibold">Выберите прочность</h2>
            <ul className="flex flex-wrap gap-3 mt-4">
                {frames.map((item) => {
                    return (
                        <li className="flex items-center gap-2" key={item.name}>
                            <Radio
                                id={item.name}
                                name="frame"
                                value={item.name}
                                onChange={() => dispatch(setFrame(item))}
                            />
                            <Label htmlFor={item.name}>
                                <span>{item.name}</span>
                            </Label>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};
