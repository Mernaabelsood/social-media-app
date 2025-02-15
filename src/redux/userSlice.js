import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
      name: "Mero",
      email: "Merna@gmail.com "
    },
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
  update: (state, action) => {
    state.name = action.payload.name;
    state.email = action.payload.email;
  },
    },
})
export const { update } = userSlice.actions
export default userSlice.reducer;