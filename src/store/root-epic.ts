import { combineEpics } from 'redux-observable';

import { propertyInquiry } from '../features';

export default combineEpics(...Object.values(propertyInquiry.propertyInquiryEpics));
