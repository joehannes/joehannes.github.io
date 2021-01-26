export type TCompany = {
  id: string,
  title: string,
  industry: string,
  size: number,
  icon: {
    id: string,
    color: string,
  },
  location: number,
  url: string,
  projects: { title: string, url: string}[],
}

export default TCompany;
