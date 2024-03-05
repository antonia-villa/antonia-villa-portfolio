import React from "react";
import CloseImg from "../../../assets/img/cancel.svg";
import { modalProjectType } from "../portfolioData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalDetails from "./ModalDetails";
import { MultiMediaProject, SimpleProject, VideoProject } from "./modalProjectType";

const Modal = ({ portfolioDataItem, setGetModal }) => {

  // Render dynamic modal image content based on project type
const modalImage = (portfolioDataItem) => {
  switch(portfolioDataItem.modalProjectType) {
    case modalProjectType.VIDEO:
      return <VideoProject images={portfolioDataItem.images}/>;
    case modalProjectType.MULTI_MEDIA: 
      return <MultiMediaProject images={portfolioDataItem.images} />;
    case modalProjectType.SIMPLE:
      return <SimpleProject images={portfolioDataItem.images} />;
      default:
        return <div>Error: Invalid Project Type </div>;
    }
  }


  return (
    <div className="modal_portfolio">
      <div
        className="modal__outside"
        onClick={() => setGetModal(false)}
      ></div>
      <div className="modal__content">
            <div key={portfolioDataItem.id} data-aos="fade">
              <h2 className="heading mb-2">{portfolioDataItem.type}</h2>
              <p >{portfolioDataItem.modalDetails.description}</p>
              <div className="modal__details">
                    <ModalDetails details={portfolioDataItem.modalDetails} />
              </div>
              <figure className={`modal__img ${portfolioDataItem.styleTags ? portfolioDataItem.styleTags : ""}`}>
                {modalImage(portfolioDataItem)}
              </figure>
              <button
                className="close-modal"
                onClick={() => setGetModal(false)}
              >
                <img src={CloseImg} alt="portfolio project demo" />
              </button>
            </div>
          
        
      </div>
    </div>
  );
};

export default Modal;
