import { RootAction, RootState, Services } from 'StoreTypes';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { composeEnhancers } from './utils';
import rootReducer from './root-reducer';
import initialState from './root-model';
import rootEpic from './root-epic';
import services from '../services';

export const epicMiddleware = createEpicMiddleware<
  RootAction,
  RootAction,
  RootState,
  Services
>({
  dependencies: services,
});

const middleware = [epicMiddleware];
const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(rootReducer, initialState, enhancer);

epicMiddleware.run(rootEpic);

export default store;
