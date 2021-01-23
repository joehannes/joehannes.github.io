export const WorkExperience = {
  title: 'work_experience',
  version: 0,
  description: 'all relevant job/project specifics',
  type: 'object',
  properties: {
    style: {
      type: 'object',
      properties: {
        background: 'string',
        color: 'string',
      },
    },
    date: {
      type: 'object',
      properties: {
        from: 'number',
        to: 'number',
      },
    },
    technology: {
      type: 'object',
      properties: {
        schema: 'string',
        id: 'number',
      },
    },
    position: {
      type: 'object',
      properties: {
        schema: 'string',
        id: 'number',
      },
    },
    remote: {
      type: 'object',
      properties: {
        schema: 'string',
        id: 'number',
      },
    },
    contract: {
      type: 'object',
      properties: {
        schema: 'string',
        id: 'number',
      },
    },
    company: {
      type: 'object',
      properties: {
        schema: 'string',
        id: 'number',
      },
    },
    description: {
      type: 'object',
      properties: {
        function: 'string',
        teamsize: 'string',
        method: 'string',
        focus: 'string',
      },
    },
  },
};
