import { createAction } from 'typesafe-actions'

import * as Model from '../../db/model'
import {
  UPDATE_GITHUB,
  UPDATE_GITLAB
} from './constants'

export const updateGithubContribs = createAction(UPDATE_GITHUB)<Model.TWorkExperience>()
export const updateGitlabContribs = createAction(UPDATE_GITLAB)<Model.TCompany>()
