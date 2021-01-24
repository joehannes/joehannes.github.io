export const Technology = {
  title: 'technology',
  version: 0,
  description: 'all tech of my experience',
  type: 'object',
  properties: {
    id: {
      type: 'number',
      primary: true,
    },
    title: 'string',
    from: 'number',
    level: {
      type: 'number',
      minimum: 1,
      maximum: 7,
    },
  },
};
