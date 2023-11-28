import { call, put } from "redux-saga/effects";
import { requestSession } from "../requests/session";
import { setSessionId } from "../../reducers/session";

export function* handleCreateSession() {
  try {
    const response: { data: string } = yield call(requestSession);
    const { data } = response;
    yield put(setSessionId(data));
  } catch (error) {
    console.log(error);
  }
}