import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import sagas from './sagas';

// middlewares da aplicação
const middlewares = [];

// instância do sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

const createAppropriateStore =
  process.env.NODE_ENV === 'development' ? console.tron.createStore : createStore;

const store = createAppropriateStore(reducers, compose(applyMiddleware(...middlewares)));

// rodando nossos sagas
sagaMiddleware.run(sagas);

export default store;
