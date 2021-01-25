import TLocation from './Location.model';

export type TCompanyBase = {
  id: number,
  title: string,
  industry: string,
  size: number,
  icon: {
    id: string,
    color: string,
  },
  url: string,
  projects: { title: string, url: string}[],
}

export type TCompanyDetails = {
  location: number,
}

interface ICompanyDetails extends TCompanyBase {
  location: TLocation;
}

type TCompany = ICompanyDetails;

export default TCompany;
