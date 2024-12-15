import { createSlice } from '@reduxjs/toolkit';
const initialAuthState = {
  loggedIn: false,
  nameOfFood: '',
  recipeName: '',
  userName: '',
};
const authSlice = createSlice({
  name: 'products',
  initialState: initialAuthState,
  reducers: {
    isLoggedIn(state) {
      state.loggedIn = true;
    },
    isLoggedOut(state) {
      state.loggedIn = false;
    },
    foodName(state, action) {
      state.nameOfFood = action.payload;
    },
    foodRecipe(state, action) {
      state.recipeName = action.payload;
    },
    setUserName(state, action) {
      state.userName = action.payload;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice;
