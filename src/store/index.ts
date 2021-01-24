// import { RootAction, RootState, Services } from 'StoreTypes';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { composeEnhancers } from './utils';
import rootReducer from './root-reducer';
// import initialState from './root-model';
// import rootEpic from './root-epic';
// import services from '../services';

// export const epicMiddleware = createEpicMiddleware<
//   RootAction,
//   RootAction,
//   RootState,
//   Services
// >({
//   dependencies: services,
// });

const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(rootReducer, {} , enhancer);

// epicMiddleware.run(rootEpic);

export default store;
