import {
  createRxDatabase,
  addRxPlugin
} from 'rxdb'
import IDbAdapter from 'pouchdb-adapter-idb'

import PortfolioSchema from './schema'
import * as Model from './model'

addRxPlugin(IDbAdapter)

export const createDB = async (): Promise<Model.TPortfolioDatabase> => {
  return createRxDatabase<Model.TPortfolioCollection>({
    name: 'portfolio_db_' + new Date().getTime(),
    adapter: 'idb',
    ignoreDuplicate: true
  })
}

export const createSchema = async (db: Model.TPortfolioDatabase): Promise<Model.TPortfolioCollection> => {
  return db.addCollections(PortfolioSchema) as unknown as Promise<Model.TPortfolioDatabase>
}

export const populateDB = async ({
  work_experience: WorkExperience,
  company: Company,
  location: Location,
  position: Position,
  technology: Technology,
  contract_type: ContractType,
  project: Project
}: Model.TPortfolioCollection, {
  workExperienceData,
  companyData,
  locationData,
  positionData,
  technologyData,
  contractTypeData,
  projectData
}: { [data: string]: any[] }) => {
  await ContractType.bulkInsert(contractTypeData)
  await Technology.bulkInsert(technologyData)
  await Position.bulkInsert(positionData)
  await Location.bulkInsert(locationData)
  await Company.bulkInsert(companyData)
  await WorkExperience.bulkInsert(workExperienceData)
  await Project.bulkInsert(projectData)
}
