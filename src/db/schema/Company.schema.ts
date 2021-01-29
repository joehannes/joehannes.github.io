import { normalize, RxJsonSchema } from 'rxdb';

import { TPortfolioDoc } from '../model';

const Company: RxJsonSchema<TPortfolioDoc["company"]> = normalize({
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
      type: 'string',
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
        ref: 'project',
        type: 'string',
      },
    },
  },
});

export default Company;
