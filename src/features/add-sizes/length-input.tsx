import { configs } from "@data";
import { NumberValidator, InputField } from "@shared";
import { useState } from "react";
import { useAppDispatch, setSizeLength } from "@entities";

const length = configs.find(
    (item) => item.type === "size" && item.key === "length"
);

const lengthValidator = new NumberValidator(
    length?.min as number,
    length?.max as number
);

export const LenghtInput = () => {
    const [err, setErr] = useState("");
    const dispatch = useAppDispatch();

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const errMessage = lengthValidator.validate(value);
        if (errMessage) {
            setErr(errMessage);
        } else {
            setErr("");
            dispatch(setSizeLength(Number(value)));
        }
    };

    return (
        <InputField label="Длина" err={err} onBlur={handleBlur}></InputField>
    );
};
