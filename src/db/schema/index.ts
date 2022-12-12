import { RxJsonSchema } from 'rxdb'

import { TPortfolioDoc } from '../model'

import WorkExperience from './WorkExperience.schema'
import Company from './Company.schema'
import Location from './Location.schema'
import Position from './Position.schema'
import Technology from './Technology.schema'
import ContractType from './ContractType.schema'
import Project from './Project.schema'

export type TSchema = {
  WorkExperience: RxJsonSchema<TPortfolioDoc['work_experience']>,
  Company: RxJsonSchema<TPortfolioDoc['company']>,
  Location: RxJsonSchema<TPortfolioDoc['location']>,
  Position: RxJsonSchema<TPortfolioDoc['position']>,
  Technology: RxJsonSchema<TPortfolioDoc['technology']>,
  ContractType: RxJsonSchema<TPortfolioDoc['contract_type']>,
  Project: RxJsonSchema<TPortfolioDoc['project']>,
};

const PortfolioSchema: { [specificSchema: string]: {
  schema: TSchema[keyof TSchema],
  methods?: { [fn: string]: (...args: any[]) => any },
  statics?: { [fn: string]: (...args: any[]) => Promise<any> },
}} = {
  work_experience: { schema: WorkExperience },
  company: { schema: Company },
  location: { schema: Location },
  position: { schema: Position },
  technology: { schema: Technology },
  contract_type: { schema: ContractType },
  project: { schema: Project }
}

export default PortfolioSchema
