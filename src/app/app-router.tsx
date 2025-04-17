import { createBrowserRouter, RouterProvider } from "react-router";
import { MainPage, BucketPage } from "@pages";
import { Header, Layout } from "@shared";

const links = [
    {
        label: "Главная",
        href: "/",
    },
    {
        label: "Корзина",
        href: "/bucket",
    },
];

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout header={<Header links={links} />} />,
        children: [
            { path: "/", element: <MainPage /> },
            { path: "/bucket", element: <BucketPage /> },
        ],
    },
]);

export const AppRouter = () => {
    return <RouterProvider router={router} />;
};
