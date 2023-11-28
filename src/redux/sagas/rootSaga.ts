import { takeLatest } from "redux-saga/effects";
import { postTypes } from "../actionTypes";
import { handleGetProducts, handleGetProductsByCart, handleSearchProducts } from "./handlers/products";
import { handleGetCartSession, handleSetCartSession } from "./handlers/cart";
import { handleCreateSession } from "./handlers/session";

export function* watcherSaga() {
  yield takeLatest(postTypes.CREATE_SESSION, handleCreateSession);

  yield takeLatest(postTypes.GET_PRODUCTS, handleGetProducts);

  yield takeLatest(postTypes.SEARCH_PRODUCTS, handleSearchProducts);

  yield takeLatest(postTypes.GET_CART, handleGetCartSession);

  yield takeLatest(postTypes.SET_CART, handleSetCartSession);

  yield takeLatest(postTypes.GET_PRODUCTS_BY_CART, handleGetProductsByCart);
}
