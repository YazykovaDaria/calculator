import { ReactElement } from "react";
import { Outlet } from "react-router";

type LayoutProps = {
    header?: ReactElement;
};

export const Layout = ({ header }: LayoutProps) => (
    <div className="w-dvw h-dvh flex flex-col justify-between">
        {header}
        <main className="max-w-7xl w-full self-center grow">
            <Outlet></Outlet>
        </main>
    </div>
);
