import { ComponentProps } from "react";
import { Button } from "flowbite-react";

export const AddButton = ({
    type = "button",
    ...props
}: ComponentProps<"button">) => {
    return (
        <Button size="xs" type={type} {...props}>
            В корзину
        </Button>
    );
};
