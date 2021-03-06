import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './ducks';
import sagas from './sagas';

// middlewares da aplicação
const middlewares = [];

// config reactotron saga
const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;

// instância do sagaMiddleware
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const createAppropriateStore =
  process.env.NODE_ENV === 'development' ? console.tron.createStore : createStore;

const store = createAppropriateStore(reducers, compose(applyMiddleware(...middlewares)));

// rodando nossos sagas
sagaMiddleware.run(sagas);

export default store;
