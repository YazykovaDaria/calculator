import { ComponentProps } from "react";

export const AddButton = ({
    type = "button",
    ...props
}: ComponentProps<"button">) => {
    return (
        <button
            type={type}
            {...props}
            className="text-center hover:cursor-pointer hover:text-blue-700"
        >
            В корзину
        </button>
    );
};
