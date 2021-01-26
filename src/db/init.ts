import {
  createRxDatabase,
  addRxPlugin,
} from 'rxdb';
import IDbAdapter from 'pouchdb-adapter-idb';

import PortfolioSchema from './schema';
import * as Model from './model';

addRxPlugin(IDbAdapter);

export const create = async (): Promise<Model.TPortfolioDatabase> => {
  const db: Model.TPortfolioDatabase = await createRxDatabase<Model.TPortfolioCollection>({
    name: 'portfoliodb',
    adapter: 'idb',
  })

  await db.addCollections(PortfolioSchema);

  return db;
}

export const populate = async ({
  WorkExperience,
  Company,
  Location,
  Position,
  Technology,
  ContractType,
}: Model.TPortfolioDatabase, {
  workExperienceData,
  companyData,
  locationData,
  positionData,
  technologyData,
  contractTypeData
  }: { [data: string]: any[] }) => {
  await ContractType.bulkInsert(contractTypeData);
  await Technology.bulkInsert(technologyData);
  await Position.bulkInsert(positionData);
  await Location.bulkInsert(locationData);
  await Company.bulkInsert(companyData);
  await WorkExperience.bulkInsert(workExperienceData);
}
