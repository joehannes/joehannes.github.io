export const Location = {
  title: 'remote_location',
  version: 0,
  description: 'remote city of digital nomadism',
  type: 'object',
  properties: {
    id: {
     type: 'number',
     primary: true,
    },
    city: 'string',
    country: 'string',
    region: 'string',
    timezone: 'string',
  }
}
