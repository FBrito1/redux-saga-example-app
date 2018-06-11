import { all, takeLatest } from 'redux-saga/effects';

import { addFavorite } from './favorites';

// * depois de function é o generator, parecido com async await porem, mais poderoso
export default function* rootSaga() {
  yield all([
    takeLatest('ADD_FAVORITE_REQUEST', addFavorite),
  ]);
}

// takeLatest pega sempre a ultima requisição do usuário
// takeEvery pega todas as requisições em background

