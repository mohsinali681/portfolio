import React from "react";

const experienceContent = [
  {
    year: " Januray - 2022",
    position: " internship as Front-End Developer",
    compnayName: "Diligent Technologies",
    details: `  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
        adipisicing elit`,
  },
  {
    year: "feb 2022 - sept 2022",
    position: "Front-End Developer ",
    compnayName: "Diligent Technologies",
    details: `Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol
        elit, tempor incididunt`,
  },
  {
    year: "   may 2022 - jan 2023",
    position: " React js developer",
    compnayName: "Digital Poin8",
    details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
        elit, sed do eiusmod tempor duntt`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className='icon'>
            <i className='fa fa-briefcase'></i>
          </div>
          <span className='time open-sans-font text-uppercase'>{val.year}</span>
          <h5 className='poppins-font text-uppercase'>
            {val.position}
            <span className='place open-sans-font'>{val.compnayName}</span>
          </h5>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
