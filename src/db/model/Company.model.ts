export type TCompany = {
  id: string,
  title: string,
  industry: string,
  size: number,
  icon: {
    id: string,
    color: string,
  },
  location: string,
  url: string,
  projects: string[],
}

export default TCompany
