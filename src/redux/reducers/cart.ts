import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartItem } from '../../components/types'

// Define a type for the slice state
interface CartState {
  cart: CartItem[] | null;
}

// Define the initial state using that type
const initialState: CartState = {
  cart: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<CartItem[]>) => {
      state.cart = action.payload;
    }
  }
})

export const { setCart } = cartSlice.actions

export default cartSlice.reducer