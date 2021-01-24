import { combineReducers } from 'redux';

import { workExperience } from '../features';

const rootReducer = combineReducers({
  workExperience: workExperience.workExperienceReducer,
});

export default rootReducer;
