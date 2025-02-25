import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  subjects: [],
  loaded: false
}

export const subjectSlice = createSlice({
  name: 'subjects',
  initialState,
  reducers: {
    getSubjects: (state, action) => {
      state.value = action.payload;
      state.loaded = false;
    },
    subjectsLoaded: (state) => {
      state.loaded = true;
    },
  },
})

export const {getSubjects, subjectsLoaded} = subjectSlice.actions;

export const subjectState = (state) => state.subject;

export default subjectSlice.reducer;