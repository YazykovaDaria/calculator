import { createBrowserRouter, RouterProvider } from "react-router";
import { MainPage, BucketPage } from "@pages";

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
        children: [
            { path: "/", element: <MainPage /> },
            { path: "/bucket", element: <BucketPage /> },
        ],
    },
]);

export const AppRouter = () => {
    return <RouterProvider router={router} />;
};
