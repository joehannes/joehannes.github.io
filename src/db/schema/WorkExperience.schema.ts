import { normalize, RxJsonSchema } from 'rxdb';

import { TPortfolioDoc } from '../model';

const WorkExperience: RxJsonSchema<TPortfolioDoc["WorkExperience"]> = normalize({
  title: 'work_experience',
  version: 0,
  description: 'all relevant job/project specifics',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      primary: true,
    },
    style: {
      type: 'object',
      properties: {
        background: {
          type: 'string',
        },
        color: {
          type: 'string',
        },
      },
    },
    date: {
      type: 'object',
      properties: {
        from: {
          type: 'number',
        },
        to: {
          type: 'number',
        },
      },
    },
    technology: {
      ref: 'technology',
      type: 'array',
      items: {
        type: 'number',
      },
    },
    position: {
      ref: 'position',
      type: 'number',
    },
    remote: {
      ref: 'location',
      type: 'number',
    },
    contract: {
      ref: 'contract_type',
      type: 'number',
    },
    company: {
      ref: 'company',
      type: 'number',
    },
    description: {
      type: 'object',
      properties: {
        function: {
          type: 'string',
        },
        teamsize: {
          type: 'string',
        },
        method: {
          type: 'string',
        },
        focus: {
          type: 'string',
        },
      },
    },
  },
});

export default WorkExperience;
