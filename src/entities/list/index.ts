import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@data";

type List = {
    list: Product | null;
};
const initialState: List = {
    list: null,
};

export const listSlice = createSlice({
    name: "list",
    initialState,
    reducers: {
        setList: (state, action) => {
            state.list = action.payload;
        },
    },
});

export const { setList } = listSlice.actions;
