import { action } from 'typesafe-actions';

import * as Model from '../../model';
import {
  UPDATE_WORK_EXPERIENCE,
  UPDATE_COMPANY,
  UPDATE_LOCATION,
  UPDATE_POSITION,
  UPDATE_TECHNOLOGY,
  UPDATE_CONTRACT_TYPE,
} from './constants';

export const updateWorkExperience = (workExperience: Model.TWorkExperience) => action(UPDATE_WORK_EXPERIENCE, workExperience);
export const updateCompany = (company: Model.TCompany) => action(UPDATE_COMPANY, company);
export const updateLocation = (location: Model.TLocation) => action(UPDATE_LOCATION, location);
export const updatePosition = (position: Model.TPosition) => action(UPDATE_POSITION, position);
export const updateTechnology = (technology: Model.TTechnology) => action(UPDATE_TECHNOLOGY, technology);
export const updateContractType = (contractType: Model.TContractType) => action(UPDATE_CONTRACT_TYPE, contractType);
