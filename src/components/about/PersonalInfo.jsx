import React from "react";

const personalInfoContent = [
  { meta: "Name", metaInfo: "Antonia Villa" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Residence", metaInfo: "United States" },
  { meta: "Email", metaInfo: "antonia.herkness@gmail.com" },
  { meta: "Languages", metaInfo: "English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li className="list-item-unstyled"key={i}>
          <span className="title">{val.metaInfo}&nbsp;:</span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
          {val.meta}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
