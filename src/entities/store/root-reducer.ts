import { combineReducers } from "@reduxjs/toolkit";
import { listSlice } from "../list";
import { pipeSlice } from "../pipe";
import { sizesSlice } from "../size";
import { frameSlice } from "../frame";
import { bucketSlice } from "../bucket";

export const rootReducer = combineReducers({
    [listSlice.name]: listSlice.reducer,
    [pipeSlice.name]: pipeSlice.reducer,
    [sizesSlice.name]: sizesSlice.reducer,
    [frameSlice.name]: frameSlice.reducer,
    [bucketSlice.name]: bucketSlice.reducer,
});
