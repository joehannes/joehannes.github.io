import { RxJsonSchema, RxCollectionCreator } from 'rxdb';

import { TPortfolioDoc } from '../model';

import WorkExperience from './WorkExperience.schema';
import Company from './Company.schema';
import Location from './Location.schema';
import Position from './Position.schema';
import Technology from './Technology.schema';
import ContractType from './ContractType.schema';


export type TSchema = {
  WorkExperience: RxJsonSchema<TPortfolioDoc["WorkExperience"]>,
  Company: RxJsonSchema<TPortfolioDoc["Company"]>,
  Location: RxJsonSchema<TPortfolioDoc["Location"]>,
  Position: RxJsonSchema<TPortfolioDoc["Position"]>,
  Technology: RxJsonSchema<TPortfolioDoc["Technology"]>,
  ContractType: RxJsonSchema<TPortfolioDoc["ContractType"]>,
};

const PortfolioSchema: { [specificSchema: string]: {
  schema: TSchema[keyof TSchema],
  methods?: { [fn: string]: (...args: any[]) => any },
  statics?: { [fn: string]: (...args: any[]) => Promise<any> },
}} = {
  workExperience: { schema: WorkExperience },
  company: { schema: Company },
  location: { schema: Location },
  position: { schema: Position },
  technology: { schema: Technology },
  contractType: { schema: ContractType },
};

export default PortfolioSchema;
