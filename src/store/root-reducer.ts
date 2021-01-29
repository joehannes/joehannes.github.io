import { combineReducers } from 'redux';

import { work } from '../features';

const rootReducer = combineReducers({
  work: work.workReducer,
});

export default rootReducer;
