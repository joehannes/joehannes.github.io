import { combineReducers } from 'redux';

import { propertyInquiry, analytics } from '../features';


const rootReducer = combineReducers({
  propertyInquiry: propertyInquiry.propertyInquiryReducer,
  analytics: analytics.analyticsReducer,
});

export default rootReducer;
