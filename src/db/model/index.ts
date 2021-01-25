import { RxDocument } from 'rxdb';

import TWorkExperience  from './WorkExperience.model';
import TCompany from './Company.model';
import TLocation from './Location.model';
import TPosition from './Position.model';
import TTechnology from './Technology.model';
import TContractType from './ContractType.model';

export type { TWorkExperience, TCompany, TLocation, TPosition, TTechnology, TContractType };

type WorkExperienceDocument = RxDocument<TWorkExperience, {}>;
type CompanyDocument = RxDocument<TCompany, {}>;
type LocationDocument = RxDocument<TLocation, {}>;
type PositionDocument = RxDocument<TPosition, {}>;
type TechnologyDocument = RxDocument<TTechnology, {}>;
type ContractTypeDocument = RxDocument<TContractType, {}>;
