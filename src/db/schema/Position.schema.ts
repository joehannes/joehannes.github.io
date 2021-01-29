import { normalize, RxJsonSchema } from 'rxdb';

import { TPortfolioDoc } from '../model';

const Position: RxJsonSchema<TPortfolioDoc["position"]> = normalize({
  title: 'carreer_level_title',
  version: 0,
  description: 'from hackster to CTO',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      primary: true,
    },
    title: {
      type: 'string',
    },
    manager: {
      type: 'boolean',
    },
    coder: {
      type: 'boolean',
    },
  },
});

export default Position;
