import { takeEvery, call, put, all } from "redux-saga/effects";
import {
  firestore,
  convertCollectionSnapshotToMap
} from "../../firebase/firebase.utils";
import ShopActionTypes from "./shop.types";
import { fetchCollectionsSuccess, fetchCollectionsError } from "./shop.actions";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsError(error.message));
  }
  //   collectionRef
  //     .get()
  //     .then(snapshot => {
  //       const collectionsMap = convertCollectionSnapshotToMap(snapshot);
  //       dispatch(fetchCollectionsSuccess(collectionsMap));
  //     })
  //     .catch(error => dispatch(fetchCollectionsError(error.message)));
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTION_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
