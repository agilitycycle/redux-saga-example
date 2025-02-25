import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  activeId: '',
  activeChapter: ''
}

export const activeSlice = createSlice({
  name: 'active',
  initialState,
  reducers: {
    updateActive: (state, action) => {
      state.value = action.payload;
    }
  },
})

export const {updateActive} = activeSlice.actions;

export const activeState = (state) => state.active;

export default activeSlice.reducer;