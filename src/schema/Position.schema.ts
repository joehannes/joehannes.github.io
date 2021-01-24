export const Position = {
  title: 'carreer_level_title',
  version: 0,
  description: 'from hackster to CTO',
  type: 'object',
  properties: {
    id: {
      type: 'number',
      primary: true,
    },
    title: 'string',
    manager: 'boolean',
    coder: 'boolean',
  },
};
