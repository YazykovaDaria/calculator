import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type BucketItem = {
    name: string;
    cost: number;
    unit: string;
    quantity: number;
};
const initialState: BucketItem[] = [];

export const bucketSlice = createSlice({
  name: "bucket",
  initialState,
  reducers: {
    addBucketItem: (state, action: PayloadAction<BucketItem>) => {
      state.push(action.payload);
    },
  }
}
)

export const { addBucketItem} = bucketSlice.actions;
