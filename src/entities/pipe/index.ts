import { createSlice } from "@reduxjs/toolkit";
// import { Product } from "@data";

type Pipe = {
    pipe: string;
};
const initialState: Pipe = {
    pipe: "test",
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
