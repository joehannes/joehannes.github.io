import { RxDocument, RxCollection, RxDatabase } from 'rxdb';

import TWorkExperience  from './WorkExperience.model';
import TCompany from './Company.model';
import TLocation from './Location.model';
import TPosition from './Position.model';
import TTechnology from './Technology.model';
import TContractType from './ContractType.model';

export interface IPortfolioDoc {
  WorkExperience: RxDocument<TWorkExperience, {}>,
  Company: RxDocument<TCompany>,
  Location: RxDocument<TLocation>,
  Position: RxDocument<TPosition>,
  Technology: RxDocument<TTechnology>,
  ContractType: RxDocument<TContractType>,
};

export type TPortfolioDoc = {
  WorkExperience: RxDocument<TWorkExperience, {}>,
  Company: RxDocument<TCompany>,
  Location: RxDocument<TLocation>,
  Position: RxDocument<TPosition>,
  Technology: RxDocument<TTechnology>,
  ContractType: RxDocument<TContractType>,
};

export type TPortfolioCollection = {
  WorkExperience: RxCollection<RxDocument<TWorkExperience, {}>, {}, {}>,
  Company: RxCollection<RxDocument<TCompany, {}>, {}, {}>,
  Location: RxCollection<RxDocument<TLocation, {}>, {}, {}>,
  Position: RxCollection<RxDocument<TPosition, {}>, {}, {}>,
  Technology: RxCollection<RxDocument<TTechnology, {}>, {}, {}>,
  ContractType: RxCollection<RxDocument<TContractType, {}>, {}, {}>,
}

export interface IPortfolioCollection {
  WorkExperience: RxCollection<RxDocument<TWorkExperience, {}>, {}, {}>,
  Company: RxCollection<RxDocument<TCompany, {}>, {}, {}>,
  Location: RxCollection<RxDocument<TLocation, {}>, {}, {}>,
  Position: RxCollection<RxDocument<TPosition, {}>, {}, {}>,
  Technology: RxCollection<RxDocument<TTechnology, {}>, {}, {}>,
  ContractType: RxCollection<RxDocument<TContractType, {}>, {}, {}>,
}

export type TPortfolioDatabase = RxDatabase<TPortfolioCollection>;
