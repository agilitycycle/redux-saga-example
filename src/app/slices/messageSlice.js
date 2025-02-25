import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  message: [
    'Logs will be printed here.'
  ]
}

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    updateMessage: (state, action) => {
      state.message.push(action.payload);
    }
  },
})

export const {updateMessage} = messageSlice.actions;

export const messageState = (state) => state.message;

export default messageSlice.reducer;