import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  section: undefined,
  content: ''
}

export const editSlice = createSlice({
  name: 'edit',
  initialState,
  reducers: {
    updateEdit: (state, action) => {
      state.value = action.payload;
      state.updated = false;
    }
  },
})

export const {updateEdit} = editSlice.actions;

export const editState = (state) => state.edit;

export default editSlice.reducer;