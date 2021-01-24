import { ActionType } from 'typesafe-actions';
import { createSlice } from '@reduxjs/toolkit';

import * as Model from '../../model';
import * as Action from './actions';
import {
  UPDATE_WORK_EXPERIENCE,
  UPDATE_COMPANY,
  UPDATE_POSITION,
  UPDATE_LOCATION,
  UPDATE_TECHNOLOGY,
  UPDATE_CONTRACT_TYPE,
} from './constants';

export type TWorkExperienceState = {
  readonly workExperience: Model.TWorkExperience;
  readonly company: Model.TCompany;
  readonly position: Model.TPosition;
  readonly location: Model.TLocation;
  readonly technology: Model.TTechnology;
  readonly contractType: Model.TContractType;
}

export type TWorkExperienceAction = ActionType<typeof Action>;

export const workExperienceSlice = createSlice({
  name: 'workExperience',
  initialState: {
    workExperience: [],
    company: [],
    position: [],
    location: [],
    technology: [],
    contractType: [],
  },
  reducers: {
    [UPDATE_WORK_EXPERIENCE]: (state, action) => state.workExperience = action.payload,
    [UPDATE_COMPANY]: (state, action) => state.company = action.payload,
    [UPDATE_POSITION]: (state, action) => state.position = action.payload,
    [UPDATE_LOCATION]: (state, action) => state.location = action.payload,
    [UPDATE_TECHNOLOGY]: (state, action) => state.technology = action.payload,
    [UPDATE_CONTRACT_TYPE]: (state, action) => state.contractType = action.payload,
  }
});

export default workExperienceSlice.reducer;
