export const ContractType = {
  title: 'contract_type',
  version: 0,
  description: 'permanent, contract, internship, owner',
  type: 'object',
  properties: {
    id: {
      type: 'number',
      primary: true,
    },
    contract: 'string',
  }
}
