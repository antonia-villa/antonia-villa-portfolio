import ResumePDF from './AHV_Resume_February2024.pdf'

export const DownloadCV = () => {
    return (
        <div className="col-12 mt-1">
        <a className="button" href={ResumePDF} target='_blank' rel="noreferrer" download="Antonia_Villa_Resume">
          <span className="button-text">Download CV</span>
          <span className="button-icon fa fa-download"></span>
        </a>
      </div>
    )
 }