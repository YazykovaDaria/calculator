import { createSlice } from "@reduxjs/toolkit";
import { Frame } from "@data";

type FrameSlice = {
    frame: Frame | null;
};
const initialState: FrameSlice = {
    frame: null,
};

export const frameSlice = createSlice({
    name: "frame",
    initialState,
    reducers: {
        setFrame: (state, action) => {
            state.frame = action.payload;
        },
    },
});

export const { setFrame } = frameSlice.actions;
