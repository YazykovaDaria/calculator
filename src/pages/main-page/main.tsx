import {
    ListChoise,
    PipeChoise,
    AddSizes,
    FrameChoise,
    Result,
} from "@features";

export const MainPage = () => {
    return (
        <div className="px-3.5 py-10">
            <h1 className="text-center font-semibold text-3xl mb-4">
                Расчёт стоимости материалов
            </h1>
            <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-3.5">
                    <ListChoise></ListChoise>
                    <PipeChoise></PipeChoise>
                    <FrameChoise></FrameChoise>
                    <AddSizes></AddSizes>
                </div>
                <Result></Result>
            </div>
        </div>
    );
};
