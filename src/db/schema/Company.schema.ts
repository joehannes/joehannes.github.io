const Company = {
  title: 'company',
  version: 0,
  description: 'employer or own company',
  type: 'object',
  properties: {
    id: {
      type: 'number',
      primary: true,
    },
    title: 'string',
    industry: 'string',
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

export default Company;
