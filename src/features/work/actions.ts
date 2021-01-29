import { createAction } from 'typesafe-actions';

import * as Model from '../../db/model';
import {
  UPDATE_WORK_EXPERIENCE,
  UPDATE_COMPANY,
  UPDATE_LOCATION,
  UPDATE_POSITION,
  UPDATE_TECHNOLOGY,
  UPDATE_CONTRACT_TYPE,
  UPDATE_PROJECT,
} from './constants';

export const updateWorkExperience = createAction(UPDATE_WORK_EXPERIENCE)<Model.TWorkExperience>();
export const updateCompany = createAction(UPDATE_COMPANY)<Model.TCompany>();
export const updateLocation = createAction(UPDATE_LOCATION)<Model.TLocation>();
export const updatePosition = createAction(UPDATE_POSITION)<Model.TPosition>();
export const updateTechnology = createAction(UPDATE_TECHNOLOGY)<Model.TTechnology>();
export const updateContractType = createAction(UPDATE_CONTRACT_TYPE)<Model.TContractType>();
export const updateProject = createAction(UPDATE_PROJECT)<Model.TProject>();

