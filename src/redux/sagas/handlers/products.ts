import { call, put } from "redux-saga/effects";
import { requestGetProducts, requestSearchProducts } from "../requests/products";
import { Product } from "../../../components/types";
import { setProducts, setProductsByCart } from "../../reducers/products";

export function* handleGetProducts() {
  try {
    const response: { data: Product[] } = yield call(requestGetProducts);
    const { data } = response;
    yield put(setProducts(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleSearchProducts(action: any) {
  try {
    const response: { data: Product[] } = yield call(requestSearchProducts, action.payload.searchKey);
    const { data } = response;
    yield put(setProducts(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetProductsByCart(action: any) {
  try {
    yield put(setProductsByCart(action.payload.cart));
  } catch (error) {
    console.log(error);
  }
}