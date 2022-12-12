import { normalize, RxJsonSchema } from 'rxdb'

import { TPortfolioDoc } from '../model'

const Project: RxJsonSchema<TPortfolioDoc['project']> = normalize({
  title: 'projects and their tech',
  version: 0,
  description: 'concrete projects, usually repective of some contract or position',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      primary: true
    },
    title: {
      type: 'string'
    },
    technology: {
      ref: 'technology',
      type: 'array',
      items: {
        type: 'string'
      }
    },
    size: {
      type: 'number',
      minimum: 0,
      maximum: 7
    },
    url: {
      type: 'string'
    },
    greenfield: {
      type: 'boolean'
    }
  }
})

export default Project
