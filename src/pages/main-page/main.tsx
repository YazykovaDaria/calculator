import { useAppSelector } from "@entities";

export const MainPage = () => {
    const pipe = useAppSelector((state) => state.pipe.pipe);

    return (
        <section>
            main page
            <p>{`pipe - ${pipe}`}</p>
        </section>
    );
};
