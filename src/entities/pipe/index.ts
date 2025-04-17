import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@data";

type Pipe = {
    pipe: Product | null;
};
const initialState: Pipe = {
    pipe: null,
};

export const pipeSlice = createSlice({
    name: "pipe",
    initialState,
    reducers: {
        setPipe: (state, action) => {
            state.pipe = action.payload;
        },
    },
});

export const { setPipe } = pipeSlice.actions;
