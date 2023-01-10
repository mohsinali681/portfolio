import React from "react";

const educationContent = [
  {
    year: "2017 - 2021",
    degree: " Software Engineering",
    institute: "National university of modern languages Islamabad",
    details: `Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol
        elit, tempor incididunt`,
  },
  {
    year: "2018",
    degree: "graphic designer",
    institute: "Ovalfox Academy Mirpur",
    details: `  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
        adipisicing elit`,
  },

  {
    year: "2016",
    degree: "Fsc ",
    institute: "Anderhal high school & college Dadyal  ",
    details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
        elit, sed do eiusmod tempor duntt`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className='icon'>
            <i className='fa fa-briefcase'></i>
          </div>
          <span className='time open-sans-font text-uppercase'>{val.year}</span>
          <h5 className='poppins-font text-uppercase'>
            {val.degree}
            <span className='place open-sans-font'>{val.institute}</span>
          </h5>
        </li>
      ))}
    </ul>
  );
};

export default Education;
