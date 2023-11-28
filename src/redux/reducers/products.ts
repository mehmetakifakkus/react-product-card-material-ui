import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartItem, Product } from '../../components/types'

// Define a type for the slice state
interface ProductState {
  products: Product[] | null;
}

// Define the initial state using that type
const initialState: ProductState = {
  products: []
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    setProductsByCart: (state, action: PayloadAction<CartItem[]>) => {
      const cartItems = action.payload;
      state.products = state.products
        ?.filter(product => cartItems.map(item => item.productId).includes(product.id))
        .map(product => {
          return {
            ...product,
            quantity: cartItems.find(cartItem => cartItem.productId === product.id)?.quantity
          }
        }) || [];
    }
  }
})

export const { setProducts, setProductsByCart } = productSlice.actions

export default productSlice.reducer