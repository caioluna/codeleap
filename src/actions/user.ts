import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: ''
  },
  reducers: {
    signup: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    }
  },
})

export const user = userSlice.reducer
export const { signup } = userSlice.actions
