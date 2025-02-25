import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  isExpand: false,
  isDarkMode: false,
  isEditor: false
}

export const controlSlice = createSlice({
  name: 'control',
  initialState,
  reducers: {
    updateControl: (state, action) => {
      state.value = action.payload;
      state.updated = false;
    }
  },
})

export const {updateControl} = controlSlice.actions;

export const controlState = (state) => state.control;

export default controlSlice.reducer;