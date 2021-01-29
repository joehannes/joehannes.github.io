type TWorkExperience = {
  id: string,
  style: {
    background: string,
    color: string,
  },
  date: {
    from: number,
    to: number,
  },
  technology: string[],
  position: string,
  remote: string,
  contract: string,
  company: string,
  description: {
    function: string,
    teamsize: string,
    method: string,
    focus: string,
  },
};

export default TWorkExperience;
