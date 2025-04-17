import { combineReducers } from "@reduxjs/toolkit";
import { listSlice } from "../list";
import { pipeSlice } from "../pipe";

export const rootReducer = combineReducers({
    [listSlice.name]: listSlice.reducer,
    [pipeSlice.name]: pipeSlice.reducer,
});
