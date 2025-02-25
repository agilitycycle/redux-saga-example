import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  loggedIn: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state) => {
      state.loggedIn = true;
    },
    signOut: (state) => {
        state.loggedIn = false;
    },
  },
})

export const {signIn, signOut} = authSlice.actions;

export const authState = (state) => state.auth;

export default authSlice.reducer;