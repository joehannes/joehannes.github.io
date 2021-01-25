import TTechnology from './Technology.model';
import TPosition from './Position.model';
import TLocation from './Location.model';
import TContractType from './ContractType.model';
import TCompany from './Company.model';

export type TWorkExperienceBase = {
  id: number,
  style: {
    background: string,
    color: string,
  },
  date: {
    from: number,
    to: number,
  },
  description: {
    function: string,
    teamsize: string,
    method: string,
    focus: string,
  },
};

export type TWorkExperienceDetails = {
  technology: number,
  position: number,
  remote: number,
  contract: number,
  company: number,
}

interface IWorkExperience extends TWorkExperienceBase {
  technology: TTechnology;
  position: TPosition;
  remote: TLocation;
  contract: TContractType;
  company: TCompany;
}

type TWorkExperience = IWorkExperience;

export default TWorkExperience;
