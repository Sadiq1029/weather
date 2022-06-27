import { createSlice, createSelector } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: { value: null },
  reducers: {
    setData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;

const selectDataSlice = (state: any) => state.data;

export const selectValue = createSelector(
  selectDataSlice,
  (state) => state.value
);

export default dataSlice.reducer;
