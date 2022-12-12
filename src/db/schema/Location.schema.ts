import { normalize, RxJsonSchema } from 'rxdb'

import { TPortfolioDoc } from '../model'

const Location: RxJsonSchema<TPortfolioDoc['location']> = normalize({
  title: 'remote_location',
  version: 0,
  description: 'remote city of digital nomadism',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      primary: true
    },
    city: {
      type: 'string'
    },
    country: {
      type: 'string'
    },
    region: {
      type: 'string'
    },
    timezone: {
      type: 'string'
    }
  }
})

export default Location
