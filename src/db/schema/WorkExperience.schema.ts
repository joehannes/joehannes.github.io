const WorkExperience = {
  title: 'work_experience',
  version: 0,
  description: 'all relevant job/project specifics',
  type: 'object',
  schema: {
    technology: 'Technology',
    position: 'Position',
    remote: 'Location',
    contract: 'ContractType',
    company: 'Company',
  },
  properties: {
    id: {
      type: 'number',
      primary: true,
    },
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
      ref: 'technology',
      type: 'array',
      items: {
        type: 'number',
      },
    },
    position: {
      ref: 'position',
      type: 'number',
    },
    remote: {
      ref: 'location',
      type: 'number',
    },
    contract: {
      ref: 'contract_type',
      type: 'number',
    },
    company: {
      ref: 'company',
      type: 'number',
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

export default WorkExperience;
