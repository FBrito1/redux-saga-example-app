import { all, takeLatest } from 'redux-saga/effects';

import { Types as FavoritesTypes } from '../ducks/favorites';

import { addFavorite } from './favorites';

// * depois de function é o generator, parecido com async await porem, mais poderoso
export default function* rootSaga() {
  yield all([
    takeLatest(FavoritesTypes.ADD_REQUEST, addFavorite),
  ]);
}

// takeLatest pega sempre a ultima requisição do usuário
// takeEvery pega todas as requisições em background

