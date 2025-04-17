import { WidthInput } from "./widht-input";
import { LenghtInput } from "./length-input";

export const AddSizes = () => {
    return (
        <section>
            <h2 className="font-semibold mb-2">Введите ваши размеры</h2>
            <div className="grid grid-cols-2 gap-2">
                <WidthInput></WidthInput>
                <LenghtInput></LenghtInput>
            </div>
        </section>
    );
};
