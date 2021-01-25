import {
  createRxDatabase,
  addRxPlugin,
  RxDatabase,
  RxCollection,
  RxJsonSchema,
  RxDocument,
} from 'rxdb';
import IDbAdapter from 'pouchdb-adapter-idb';

import * as Schema from './schema';
import * as Model from './model';

addRxPlugin(IDbAdapter);

type WorkExperienceDocument = RxDocument<Model.TWorkExperience, {}>;
type CompanyDocument = RxDocument<Model.TCompany, {}>;
type LocationDocument = RxDocument<Model.TLocation, {}>;
type PositionDocument = RxDocument<Model.TPosition, {}>;
type TechnologyDocument = RxDocument<Model.TTechnology, {}>;
type ContractTypeDocument = RxDocument<Model.TContractType, {}>;


export const createDB = async () => {
  return await createRxDatabase({
    name: 'portfoliodb',
    adapter: 'idb',
  })
}

export const createCollections = async (db: any) => {
  return await db.addCollections({
    workExperience: Schema.WorkExperience,
    company: Schema.Company,
    location: Schema.Location,
    position: Schema.Position,
    technology: Schema.Technology,
    contractType: Schema.ContractType,
  });
}

export const insertDump = async ({
  workExperienceCollection,
  companyCollection,
  locationCollection,
  positionCollection,
  technologyCollection,
  contractTypeCollection,
}, {
  workExperienceData,
  companyData,
  locationData,
  positionData,
  technologyData,
  contractTypeData,
}) => {
  await contractTypeCollection.bulkInsert(contractTypeData);
  await technologyCollection.bulkInsert(technologyData);
  await positionCollection.bulkInsert(positionData);
  await locationCollection.bulkInsert(locationData);
  await companyCollection.bulkInsert(companyData);
  await workExperienceCollection.bulkInsert(workExperienceData);
}
