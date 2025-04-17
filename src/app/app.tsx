import { Provider } from "react-redux";
import { store } from "@entities";
import { AppRouter } from "./app-router";

export const App = () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
