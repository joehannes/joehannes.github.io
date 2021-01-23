export const Company = {
  title: 'company',
  version: 0,
  description: 'employer or own company',
  type: 'object',
  properties: {
    id: 'number',
    title: 'string',
    industry: 'string',
    size: 'number',
    location: 'string',
    icon: {
      type: 'object',
      properties: {
        id: 'string',
        color: 'string',
      },
    },
    url: 'string',
    projects: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          title: 'string',
          url: 'string',
        },
      },
    },
  },
}
