export const RemoteLocation = {
  title: 'remote_location',
  version: 0,
  description: 'remote city of digital nomadism',
  type: 'object',
  properties: {
    id: 'number',
    city: 'string',
    country: 'string',
    region: 'string',
    timezone: 'string',
  }
}
