import React from "react";
import Achievements from "./Achievements";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import Skills, { SkillsLegend } from "./Skills";
import heroImgMobile from "../../assets/img/hero/img-mobile.jpg";
import { experienceCategories } from "./experienceTypes";
import { DownloadCV } from "./DownloadCV";


const index = () => {
  return (
    <section className="main-content ">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-5 col-12">
            <div className="row">
              <div className="col-12">
                <h3 className="text-uppercase custom-title mb-0 ft-wt-600">
                  Personal Info
                </h3>
              </div>
              <div className="col-12 d-block d-sm-none">
                <img
                  src={heroImgMobile}
                  className="img-fluid main-img-mobile"
                  alt="about avatar"
                />
              </div>
              <div className="col-12">
                <PersonalInfo />
              </div>
              <DownloadCV />
            </div>
          </div>

          {/*  Boxes Starts */}
          <div className="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
            <Achievements />
          </div>
          {/* Achievements Ends */}
        </div>
        {/* End .row */}

        <hr className="separator" />

        {/* Skills Starts */}
        <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase mb-3 mb-sm-0 text-left text-sm-center .custom-title-no-padding ft-wt-600">
              Skills
            </h3>
            <SkillsLegend  id="skills_legend"/>
          </div>
    
          <Skills />
        </div>
        {/* Skills Ends */}

        <hr className="separator mt-1" />

        {/* Experience */}
        <div className="row">
          <div className="col-12">
          </div>
          <div className="col-lg-6 m-15px-tb">
          <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
              Analytics Experience
            </h3>
            <div className="resume-box">
              <Experience experienceType={experienceCategories.ANALYTICS}/>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
          <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
              Engineering Experience
            </h3>
            <div className="resume-box">
              <Experience experienceType={experienceCategories.ENGINEERING}/>
            </div>
          </div>
        </div>
        {/*  Experience Ends */}
      </div>
    </section>
  );
};

export default index;
