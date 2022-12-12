import { normalize, RxJsonSchema } from 'rxdb'

import { TPortfolioDoc } from '../model'

const WorkExperience: RxJsonSchema<TPortfolioDoc['work_experience']> = normalize({
  title: 'work_experience',
  version: 0,
  description: 'all relevant job/project specifics',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      primary: true
    },
    style: {
      type: 'object',
      properties: {
        background: {
          type: 'string'
        },
        color: {
          type: 'string'
        }
      }
    },
    date: {
      type: 'object',
      properties: {
        from: {
          type: 'number'
        },
        to: {
          type: 'number'
        }
      }
    },
    technology: {
      ref: 'technology',
      type: 'array',
      items: {
        type: 'string'
      }
    },
    position: {
      ref: 'position',
      type: 'string'
    },
    remote: {
      ref: 'location',
      type: 'string'
    },
    contract: {
      ref: 'contract_type',
      type: 'string'
    },
    company: {
      ref: 'company',
      type: 'string'
    },
    description: {
      type: 'object',
      properties: {
        function: {
          type: 'string'
        },
        teamsize: {
          type: 'string'
        },
        method: {
          type: 'string'
        },
        focus: {
          type: 'string'
        }
      }
    }
  }
})

export default WorkExperience
