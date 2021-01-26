import { normalize, RxJsonSchema } from 'rxdb';

import { TPortfolioDoc } from '../model';

const Company: RxJsonSchema<TPortfolioDoc["Company"]> = normalize({
  title: 'company',
  version: 0,
  description: 'employer or own company',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      primary: true,
    },
    title: {
      type: 'string',
    },
    industry: {
      type: 'string',
    },
    size: {
      type: 'number',
      minimum: 1,
      maximum: 7,
    },
    location: {
      ref: 'location',
      type: 'number',
    },
    icon: {
      type: 'object',
      properties: {
        id: {
      type: 'string',
    },
        color: {
      type: 'string',
    },
      },
    },
    url: {
      type: 'string',
    },
    projects: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          title: {
            type: 'string',
          },
          url: {
            type: 'string',
          },
        },
      },
    },
  },
});

export default Company;
