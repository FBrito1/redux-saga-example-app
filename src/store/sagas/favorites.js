import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { addFavoriteSuccess, addFavoriteFailure } from '../actions/favorites';

// função generator, async await mais potente
export function* addFavorite(action) {
  try {
    const { data } = yield call(api.get, `/repos/${action.payload.repository}`);

    const repositoryData = {
      id: data.id,
      name: data.full_name,
      description: data.description,
      url: data.html_url,
    };

    yield put(addFavoriteSuccess(repositoryData));
  } catch (error) {
    yield put(addFavoriteFailure('Erro ao adicionar o repositório'));
  }
}

// yield = esperar/await
// call é usado quando é retornado uma promise
// put envia a action para os reducers da aplicação
