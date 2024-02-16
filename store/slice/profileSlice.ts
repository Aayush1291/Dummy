import {createSlice} from '@reduxjs/toolkit';

// Define a type for the slice state
// interface profile {
//   email: string | null;
//   password: string | null;
//   firstName: string | null;
//   lastName: string | null;
//   gender: string | null;
//   loginType: string | null;
//   phoneNo: string | null;
// }

// Define the initial state using that type
const initialState = {
  data: [],
  modules: [],
};

export const profileSlice = createSlice({
  name: 'profileSlice',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUserProfile(state, action: any) {
      state.data = action.payload;
    },
    setModules(state, action: any) {
      state.modules = action.payload;
    },
  },
});

export const {setUserProfile, setModules} = profileSlice.actions;

export default profileSlice.reducer;
