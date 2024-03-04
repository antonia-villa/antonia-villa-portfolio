import React from "react";
import { colorMap } from "../../assets/color_pallete";
import { experienceCategories } from "./experienceTypes";


const experienceContent = [
  {
    year: "   2023 - Present",
    category: experienceCategories.ENGINEERING,
    position: " Software Engineer",
    compnayName: "Logixboard",
    details: `  Currently working as a backend integration engineering using temporal and nodejs to map new data integrations into common postgresql data model`,
  },
  {
    year: "2022 - 2023",
    category: experienceCategories.ENGINEERING,
    position: " BI Engineer & Analyst",
    compnayName: "Logixboard",
    details: `Built business intelligence department from the ground up with ETL pipelines, data warehouse, reporting suite, and reverse ETL processing to third party integrations`,
  },
  {
    year: "2020 - 2022",
    category: experienceCategories.ENGINEERING,
    position: " Software Engineer",
    compnayName: "Logixboard",
    details: `Built analytics platform embedded in react application`,
  },
  {
    year: "2018 - 2020",
    category: experienceCategories.ENGINEERING,
    position: "Data Visualization Engineer",
    compnayName: "LiveStories",
    details: `Maintained and developed d3 visualization charting library and build data transformation layer for chart library`,
  },
  {
    year: "   2015 - 2017",
    category: experienceCategories.ANALYTICS,
    position: " Marketing Analyst",
    compnayName: "Customer Portfolio",
    details: `  Initiated cross functional collaboration between analysts, data architects, and data engineers to turn clients strategic initiatives into accessible/trackable data structures with interactive reporting Tableau dashboards `,
  },
  {
    year: "2014 - 2015",
    category: experienceCategories.ANALYTICS,
    position: " Acquisition Analyst",
    compnayName: "Patients Like Me, Inc.",
    details: `Develop and implemented multivariate ad testing and monitor daily results to optimize cost per acquisition on Google Ads, Facebook Ad Manager, and YouTube Video Advertising`,
  },
  {
    year: "2012 - 2015",
    category: experienceCategories.ANALYTICS,
    position: " Data Analyst",
    compnayName: "MIT",
    details: ` Create interactive tools to display data; macros, data models, and data visualizations`,
  },
];

const Experience = ({experienceType}) => {
  return (
    <ul>
    {experienceContent.filter(item => {return item.category === experienceType}).map((val, i) => (
      <li key={i}>
        <div className="icon" style={{backgroundColor: colorMap.TERTIARY}}>
          <i className="fa fa-briefcase"></i>
        </div>
        <span className="time open-sans-font text-uppercase">{val.year}</span>
        <h5 className="poppins-font text-uppercase">
          {val.position}
          <span className="place open-sans-font">{val.compnayName}</span>
        </h5>
        <p className="open-sans-font">{val.details}</p>
      </li>
    ))}
  </ul>
  );
};

export default Experience;
