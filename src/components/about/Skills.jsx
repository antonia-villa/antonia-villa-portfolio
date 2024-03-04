import { colorMap } from "../../assets/color_pallete"; 
import React from "react";

const SkillCategoryMap = {
  FRONTEND: {label: 'Front end', color: colorMap.MAIN},
  BACKEND: {label: 'Backend', color: colorMap.SECONDARY},
  VISUALIZATION: {label: 'Visualization', color: colorMap.TERTIARY} 
}

const skillsContent = [
  { skillCategory: SkillCategoryMap.FRONTEND, skillPercent: "80", skillName: "REACT"},
  { skillCategory: SkillCategoryMap.FRONTEND, skillPercent: "80", skillName: "TYPESCRIPT" },
  { skillCategory: SkillCategoryMap.FRONTEND, skillPercent: "89", skillName: "JAVASCRIPT" },
  { skillCategory: SkillCategoryMap.FRONTEND, skillPercent: "90", skillName: "HTML" },
  { skillCategory: SkillCategoryMap.FRONTEND, skillPercent: "65", skillName: "CSS" },
  { skillCategory: SkillCategoryMap.BACKEND , skillPercent: "60", skillName: "NODEJS" },
  { skillCategory: SkillCategoryMap.BACKEND, skillPercent: "90", skillName: "POSTGRESQL" },
  { skillCategory: SkillCategoryMap.BACKEND, skillPercent: "50", skillName: "TEMPORAL" },
  { skillCategory: SkillCategoryMap.VISUALIZATION, skillPercent: "55", skillName: "D3" },
  { skillCategory: SkillCategoryMap.VISUALIZATION,  skillPercent: "75", skillName: "RECHARTS" },
  { skillCategory: SkillCategoryMap.VISUALIZATION, skillPercent: "55", skillName: "CHARTJS" },
  { skillCategory: SkillCategoryMap.VISUALIZATION, skillPercent: "90", skillName: "LOOKERSTUDIO" },
];



export const SkillsLegend = () => {
  const legendItems = Object.values(SkillCategoryMap)
  
    return (
      <div className="legend-item-container">
        {legendItems.map((item, i) => (
          <div className="legend-item-container-item">
              <div className="circle" style={{backgroundColor: item.color}} />
              <p className="open-sans-font m-0 text-uppercase legend-item-label">{item.label}</p>
   
        </div>
        ))}
      </div>
    )
  
}

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 p${val.skillPercent}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar" style={{borderColor: val.skillCategory.color}}></div>
              <div className="fill" style={{borderColor: val.skillCategory.color}}></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};




export default Skills;
