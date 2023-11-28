import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface CartState {
  sessionId: string;
}

// Define the initial state using that type
const initialState: CartState = {
  sessionId: ""
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setSessionId: (state, action: PayloadAction<string>) => {
      localStorage.setItem("sessionId", action.payload);
      state.sessionId = action.payload;
    }
  }
})

export const { setSessionId } = cartSlice.actions

export default cartSlice.reducer