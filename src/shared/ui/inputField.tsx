import { Label, TextInput } from "flowbite-react";
import { ComponentProps } from "react";

type InputProps = {
    err?: string;
    label: string;
} & ComponentProps<"input">;

export const InputField = ({ label, err, ...props }: InputProps) => {
    return (
        <div>
            <Label>
                <span>{label}</span>
                <TextInput {...props} />
            </Label>
            {err && <span className="text-red-600 mt-1.5 text-xs">{err}</span>}
        </div>
    );
};
