import { configs } from "@data";
import { NumberValidator, InputField } from "@shared";
import { useState } from "react";
import { useAppDispatch, setSizeWidth } from "@entities";

const width = configs.find(
    (item) => item.type === "size" && item.key === "width"
);

const widthValidator = new NumberValidator(
    width?.min as number,
    width?.max as number
);

export const WidthInput = () => {
    const [err, setErr] = useState("");
    const dispatch = useAppDispatch();

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const errMessage = widthValidator.validate(value);
        if (errMessage) {
            setErr(errMessage);
        } else {
            setErr("");
            dispatch(setSizeWidth(Number(value)));
        }
    };

    return (
        <InputField label="Ширина" err={err} onBlur={handleBlur}></InputField>
    );
};
