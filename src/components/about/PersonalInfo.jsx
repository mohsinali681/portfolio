import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Mohsin Ali" },
  { meta: "last name", metaInfo: "Afsar" },
  { meta: "Age", metaInfo: "25 Years" },
  { meta: "Nationality", metaInfo: "Pakistani" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Mirpur, ajk pakistan " },
  { meta: "phone", metaInfo: "+92 3191797244" },
  { meta: "Email", metaInfo: "mohsin37345@gmail.com" },
  { meta: "linkedin", metaInfo: "iammohsinmughal " },
  { meta: "langages", metaInfo: " English, Urdu, Punjabi" },
];

const PersonalInfo = () => {
  return (
    <ul className='about-list list-unstyled open-sans-font'>
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className='title'>{val.meta}: </span>
          <span className='value d-block d-sm-inline-block d-lg-block d-xl-inline-block'>
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
