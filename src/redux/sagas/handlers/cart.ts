import { call, put } from "redux-saga/effects";
import { CartItem } from "../../../components/types";
import { requestCart } from "../requests/cart";
import { setCart } from "../../reducers/cart";

export function* handleGetCart() {
  try {
    const response: { data: CartItem[] } = yield call(requestCart);
    const { data } = response;
    yield put(setCart(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetCartSession() {
  try {
    const data: string = yield call([localStorage, 'getItem'], 'cart');
    const cartParsed: CartItem[] = JSON.parse(data) || [];
    yield put(setCart(cartParsed));
  } catch (error) {
    console.log(error);
  }
}

export function* handleSetCartSession(action: any) {
  try {
    const data: string = yield call([localStorage, 'getItem'], 'cart');
    const cartParsed: CartItem[] = JSON.parse(data) || [];
    const newCart = action.payload;

    if (cartParsed) {
      const found = cartParsed.find((item: CartItem) => item.productId === newCart.productId);

      if (found) {
        if (newCart.quantity === 0)
          cartParsed.splice(cartParsed.indexOf(found), 1);
        else if (newCart.quantity > 0)
          cartParsed[cartParsed.indexOf(found)] = newCart;
      }
      else
        cartParsed.push(newCart);

      localStorage.setItem("cart", JSON.stringify(cartParsed));
      yield put(setCart(cartParsed));
    }
  } catch (error) {
    console.log(error);
  }
}
