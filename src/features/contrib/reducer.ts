import { ActionType, createReducer } from 'typesafe-actions'

import * as Model from '../../db/model'
import * as Action from './actions'
import {
  UPDATE_WORK_EXPERIENCE,
  UPDATE_COMPANY,
  UPDATE_POSITION,
  UPDATE_LOCATION,
  UPDATE_TECHNOLOGY,
  UPDATE_CONTRACT_TYPE,
  UPDATE_PROJECT
} from './constants'

interface IWorkState {
  workExperience: Array<Model.TWorkExperience>;
  company: Array<Model.TCompany>;
  position: Array<Model.TPosition>;
  location: Array<Model.TLocation>;
  technology: Array<Model.TTechnology>;
  contractType: Array<Model.TContractType>;
  project: Array<Model.TProject>;
}

export type TWorkState = IWorkState;

export type TWorkAction = ActionType<typeof Action>;

const initialState = {
  workExperience: [],
  company: [],
  position: [],
  location: [],
  technology: [],
  contractType: [],
  project: []
} as unknown as TWorkState

const addOrUpdate = (
  state: TWorkState,
  action: TWorkAction,
  selector: keyof TWorkState
): TWorkState => {
  if (
    (state[selector] as Array<any>).filter(
      (selected) => selected.id === action.payload.id
    ).length === 0
  ) {
    (state[selector] as Array<any>).push(action.payload)
    // (state[selector] as Array<any>) = [...state[selector], action.payload];
  } else {
    const i = (state[selector] as Array<any>).findIndex(
      (selected) => selected.id === action.payload.id
    );

    (state[selector] as Array<any>).splice(i, 1, {
      ...action.payload
    })
    // (state[selector] as Array<any>) = [...state[selector]];
  }

  return { ...state }
}

const reducer = createReducer<TWorkState, TWorkAction>(initialState, {
  [UPDATE_WORK_EXPERIENCE]: (state, action) =>
    addOrUpdate(state, action, 'workExperience'),
  [UPDATE_COMPANY]: (state, action) => addOrUpdate(state, action, 'company'),
  [UPDATE_POSITION]: (state, action) => addOrUpdate(state, action, 'position'),
  [UPDATE_LOCATION]: (state, action) => addOrUpdate(state, action, 'location'),
  [UPDATE_TECHNOLOGY]: (state, action) =>
    addOrUpdate(state, action, 'technology'),
  [UPDATE_CONTRACT_TYPE]: (state, action) =>
    addOrUpdate(state, action, 'contractType'),
  [UPDATE_PROJECT]: (state, action) => addOrUpdate(state, action, 'project')
})

export default reducer
