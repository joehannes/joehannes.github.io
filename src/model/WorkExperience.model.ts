export type WorkExperience = {
  style: {
    background: string,
    color: string,
  },
  date: {
    from: number,
    to: number,
  },
  technology: number,
  position: number,
  remote: number,
  contract: number,
  company: number,
  description: {
    function: string,
    teamsize: string,
    method: string,
    focus: string,
  },
};
