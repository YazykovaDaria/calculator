import { createSlice } from "@reduxjs/toolkit";

type Size = {
    width: number;
    length: number;
};

const initialState: Size = {
    width: 1,
    length: 1,
};

export const sizesSlice = createSlice({
    name: "sizes",
    initialState,
    reducers: {
        setSizeWidth: (state, action) => {
            state.width = action.payload;
        },
        setSizeLength: (state, action) => {
            state.length = action.payload;
        },
    },
});

export const { setSizeLength, setSizeWidth } = sizesSlice.actions;
