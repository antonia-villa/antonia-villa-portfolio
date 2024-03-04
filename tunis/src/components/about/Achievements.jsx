import React from "react";
import { colorMap } from "../../assets/color_pallete";

const achievementsContent = [
  { title: "6", subTitle1: "years of", subTitle2: "analytics experience", color: colorMap.SECONDARY },
  { title: "6", subTitle1: "years of", subTitle2: "engineering experience", color: colorMap.TERTIARY }
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font" style={{color: val.color}}>{val.title}</h3>
            <p className="open-sans-font m-0 text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
