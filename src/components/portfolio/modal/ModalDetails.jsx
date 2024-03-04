import React from "react";
import InvitationAcceptanceReportPDF from './Invitation_Acceptance_Report.pdf'
import PeriodicUsageReportPDF from './Periodic_Usage_Report.pdf'
import CustomerLifecycleAnalysis from './Customer_Lifecycle_Analysis.pdf'

const ModalDetails = ({details}) => {
    console.log('details', details)

   const PDFDownload = ({download_title}) => {
    switch(download_title) {
      case download_title === "Invitation_Acceptance_Report":
        return InvitationAcceptanceReportPDF      
      case download_title === "Periodic_Usage_Report":
        return PeriodicUsageReportPDF
      case download_title === "Customer_Lifecycle_Analysis":
          return CustomerLifecycleAnalysis
      default:
        return null;
    }
   }

    return (
        <div className="column open-sans-font">
        {
          details.project ? 
            <div className="col-12 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
              <span className="ft-wt-600 uppercase"> Project:{" "} </span>
              <span className="ft-wt-400 uppercase">
                {details.project}
              </span>
            </div> 
            : <></>
        }
        {
        details.client ? 
          <div className="col-12 mb-2">
            <i className="fa fa-user-o pr-2"></i>
           <span className="ft-wt-600 uppercase"> Client :{" "} </span>
            <span className="ft-wt-400 uppercase">
              {details.client}
            </span> 
          </div> 
          : <></>
        }
        {
          details.language ? 
          <div className="col-12 mb-2">
            <i class="fa fa-language pr-2"></i>
            <span className="ft-wt-600 uppercase"> Languages :{" "} </span>
            <span className="ft-wt-400 uppercase">
              {details.language}
            </span>
          </div> 
          : <></>
        }
        {
        details.pressLink ? 
        <div className="col-12 mb-2">
        <i class="fa-solid fa-newspaper pr-2"></i>
          <a
            className="preview-link-white"
            target="_blank"
            rel="noopener noreferrer nofollow"
            href={details.pressLink}
          >
        <span className="ft-wt-600 uppercase"> {" "} Press Coverage  </span>
         </a>
        </div> :
         <></>}
        {
        details.link ? 
        <div className="col-12 mb-2">
        <i class="fa fa-link pr-2"></i>
        <span className="ft-wt-600 uppercase"> {" "} Preview Link  </span>
          <a
            className="preview-link-white"
            target="_blank"
            rel="noopener noreferrer nofollow"
            href={details.link}
          >
            {details.githubLink 
        ? <i className="fa fa-github pr-2"/> 
        : <i className="fa fa-external-link pr-2"/> 
        } </a>
        </div> :
         <></>}
                 {
        details.downloadable_pdf ? 
        <div className="col-12 mb-2">
        <i class="fa  fa-file-pdf-o pr-2"></i>
        <a
            className="preview-link-white"
            target="_blank"
            rel="noopener noreferrer nofollow"
            download={details.download_title}
            href={PDFDownload(details.download_title)}
          >
        <span className="ft-wt-600 uppercase"> {" "} Download PDF  </span>
         </a>
        </div> :
         <></>}

      </div>
    )
}

export default ModalDetails; 