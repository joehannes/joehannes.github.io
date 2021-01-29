import { normalize, RxJsonSchema } from 'rxdb';

import { TPortfolioDoc } from '../model';

const ContractType: RxJsonSchema<TPortfolioDoc["contract_type"]> = normalize({
  title: 'contract_type',
  version: 0,
  description: 'permanent, contract, internship, owner',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      primary: true,
    },
    contract: {
      type: 'string',
    },
  }
});

export default ContractType;
