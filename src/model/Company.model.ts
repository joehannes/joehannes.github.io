export type Company = {
  id: number,
  title: string,
  industry: string,
  size: number,
  location: string,
  icon: {
    id: string,
    color: string,
  },
  url: string,
  projects: { title: string, url: string}[],
}
