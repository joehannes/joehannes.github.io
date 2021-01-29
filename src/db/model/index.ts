import { RxDocument, RxCollection, RxDatabase } from 'rxdb';

import TWorkExperience  from './WorkExperience.model';
import TCompany from './Company.model';
import TLocation from './Location.model';
import TPosition from './Position.model';
import TTechnology from './Technology.model';
import TContractType from './ContractType.model';
import TProject from './Project.model';

export type {
  TWorkExperience,
  TCompany,
  TLocation,
  TPosition,
  TTechnology,
  TContractType,
  TProject,
};

export interface IPortfolioDoc {
  WorkExperience: RxDocument<TWorkExperience, {}>,
  Company: RxDocument<TCompany>,
  Location: RxDocument<TLocation>,
  Position: RxDocument<TPosition>,
  Technology: RxDocument<TTechnology>,
  ContractType: RxDocument<TContractType>,
  Project: RxDocument<TProject>,
};

export type TPortfolioDoc = {
  work_experience: RxDocument<TWorkExperience, {}>,
  company: RxDocument<TCompany>,
  location: RxDocument<TLocation>,
  position: RxDocument<TPosition>,
  technology: RxDocument<TTechnology>,
  contract_type: RxDocument<TContractType>,
  project: RxDocument<TProject>,
};

export type TPortfolioCollection = {
  work_experience: RxCollection<RxDocument<TWorkExperience, {}>, {}, {}>,
  company: RxCollection<RxDocument<TCompany, {}>, {}, {}>,
  location: RxCollection<RxDocument<TLocation, {}>, {}, {}>,
  position: RxCollection<RxDocument<TPosition, {}>, {}, {}>,
  technology: RxCollection<RxDocument<TTechnology, {}>, {}, {}>,
  contract_type: RxCollection<RxDocument<TContractType, {}>, {}, {}>,
  project: RxCollection<RxDocument<TProject, {}>, {}, {}>,
}

export type TPortfolioCollectionKey = keyof TPortfolioCollection;

export interface IPortfolioCollection {
  work_experience: RxCollection<RxDocument<TWorkExperience, {}>, {}, {}>,
  company: RxCollection<RxDocument<TCompany, {}>, {}, {}>,
  location: RxCollection<RxDocument<TLocation, {}>, {}, {}>,
  position: RxCollection<RxDocument<TPosition, {}>, {}, {}>,
  technology: RxCollection<RxDocument<TTechnology, {}>, {}, {}>,
  contract_type: RxCollection<RxDocument<TContractType, {}>, {}, {}>,
  project: RxCollection<RxDocument<TProject, {}>, {}, {}>,
}

export type TPortfolioDatabase = RxDatabase<TPortfolioCollection>;
