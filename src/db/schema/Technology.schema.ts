import { normalize, RxJsonSchema } from 'rxdb';

import { TPortfolioDoc } from '../model';

const Technology: RxJsonSchema<TPortfolioDoc["technology"]> = normalize({
  title: 'technology',
  version: 0,
  description: 'all tech of my experience',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      primary: true,
    },
    title: {
      type: 'string',
    },
    from: {
      type: 'number',
    },
    level: {
      type: 'number',
      minimum: 1,
      maximum: 7,
    },
  },
});

export default Technology;
