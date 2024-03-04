export const projectCategoryTag = {
  DATA_VISUALIZTION: "data_visualization",
  BI_ENGINEERING: "bi_engineering",
  SOFTWARE_ENGINEERING: "software_engineering"
  
}

export const modalProjectType = {
  VIDEO: 'video',
  MULTI_MEDIA: 'multi_media',
  SIMPLE: 'simple'
}

/// Import Project Images
// Function to format all images
function importAll(r) {
  let images = {};
   r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images
 }

//const CausesOfDeathImages = require.context("../../assets/img/portfolio/causes_of_death", true);
const CensusDataExplorer = importAll(require.context("../../assets/img/portfolio/census_data_explorer", true));
const CausesOfDeath = importAll(require.context("../../assets/img/portfolio/causes_of_death", true));
const Dreamstate = importAll(require.context("../../assets/img/portfolio/dreamstate", true));
const PNWDropperCalculator = importAll(require.context("../../assets/img/portfolio/pnw_dropper_calculator", true));
const PopulationPredictions = importAll(require.context("../../assets/img/portfolio/population_predictions", true));
const VisualizeWashington = importAll(require.context("../../assets/img/portfolio/visualize_washington_state_counties", true));
const InvitationAcceptance = importAll(require.context("../../assets/img/portfolio/invitation_acceptance", true));
const PeriodicUsageReport = importAll(require.context("../../assets/img/portfolio/periodic_usage_report", true));
const CustomerAnalysis = importAll(require.context("../../assets/img/portfolio/customer_analysis", true));


const mainImageText = 'cover_image'

const PortfolioData = [
  {
    id: 1,
    type: "Census Data Explorer",
    projectMainImage: Object.values(CensusDataExplorer).filter(item => {return item.includes(mainImageText)})[0],
    images: Object.values(CensusDataExplorer).filter(item => {return !item.includes(mainImageText)}),
    tag: ["data_visualization"],
    delayAnimation: "0",
    modalProjectType: modalProjectType.MULTI_MEDIA,
    modalDetails: 
      {
        project: "Census Data Explorer",
        language: "Node.js, Express, jQuery, ChartJS, Bootstrap",
        description: "Explore open source census data to understand differences in cities across the country. ",
        preview: "",
        githubLink: true,
        link: "https://github.com/antonia-villa/project2",
      },
    
  },
  {
    id: 2,
    type: "Causes of Death",
    projectMainImage: Object.values(CausesOfDeath).filter(item => {return item.includes(mainImageText)})[0],
    images: Object.values(CausesOfDeath).filter(item => {return !item.includes(mainImageText)}),
    tag: ["data_visualization"],
    delayAnimation: "0",
    modalProjectType: modalProjectType.MULTI_MEDIA,
    modalDetails: 
      {
        project: "Causes of Death",
        language: "JQuery, D3, Bootstrap, ToastR",
        description: "Delve into open source government data through an interactive application that explores the leading causes of death by cause, state, and year from 1999 through 2014.",
        preview: "",
        githubLink: true,
        link: "https://github.com/antonia-villa/leading_causes_death",
      },
  },
  {
    id: 3,
    type: "Dreamstate",
    projectMainImage: Object.values(Dreamstate).filter(item => {return item.includes(mainImageText)})[0],
    images: Object.values(Dreamstate).filter(item => {return !item.includes(mainImageText)}),
    tag: ["data_visualization"],
    delayAnimation: "0",
    modalProjectType: modalProjectType.MULTI_MEDIA,
    modalDetails: 
      {
        project: "Dreamstate",
        language: "Node/Express, React, Recharts, MongoDB",
        description: "Uncover the true meaning of your subconcious dreams and discover what your consious mind has learned to repress. Dreamstate is an interactive application enabling users to understand the meaning of their dreams and view an overall sentiment based on keyword analysis.",
        preview: "",
        githubLink: true,
        link: "https://github.com/antonia-villa/dreamstate",
      },
  },
  {
    id: 4,
    type: "PNW Dropper Calculator",
    projectMainImage: Object.values(PNWDropperCalculator).filter(item => {return item.includes(mainImageText)})[0],
    images: Object.values(PNWDropperCalculator).filter(item => {return !item.includes(mainImageText)}),
    tag: ["software_engineering"],
    delayAnimation: "0",
    modalProjectType: modalProjectType.MULTI_MEDIA,
    modalDetails: 
      {
        project: "PNW Dropper Calculator",
        language: "Liquid (Shopify Templating Language), Javascript",
        description: "Born from a collaboration with PNW Components, this piece of software was created to solve a business problem in the bike industry. Bikes are hard and can be confusing. This calculator is designed to alleviate the pain customers feel trying to understand and appropriately size dropper posts for posts.",
        preview: "",
        pressLink: "https://www.linkedin.com/posts/aaronkerson_im-excited-to-show-off-some-software-we-activity-6607408164012982272-6Oli",
        githubLink: false,
        link: "https://www.pnwcomponents.com/collections/affordable-trail/products/the-bachelor-150-dropper-post-150mm-travel",
      },
  },
  {
    id: 5,
    type: "Population Predictions",
    projectMainImage: Object.values(PopulationPredictions)[0],
    images: Object.values(PopulationPredictions),
    tag: ["data_visualization"],
    delayAnimation: "0",
    modalProjectType: modalProjectType.SIMPLE,
    modalDetails: 
      {
        project: "Population Predictions",
        language: "React, Recharts, Javascript",
        description: "Long-term global population growth is difficult to predict. The United Nations and the US Census Bureau have varying opinions on the future of the world population. The following visual shows what percent of the total world population each continent will contribute from 2010 to 2035.",
        preview: "",
        githubLink: true,
        link: "https://github.com/antonia-villa/population_predictions",
      },
  },
  {
    id: 6,
    type: "Visualize Washington",
    projectMainImage: Object.values(VisualizeWashington).filter(item => {return item.includes(mainImageText)})[0],
    images: Object.values(VisualizeWashington).filter(item => {return !item.includes(mainImageText)}),
    tag: ["data_visualization"],
    delayAnimation: "0",
    modalProjectType: modalProjectType.MULTI_MEDIA,
    modalDetails: 
      {
        project: "Visualize Washington",
        language: "Node/Express, D3, qGIS",
        description: "Dive into Washington state county level census data from 2015. This is an exploration and project aimed to learn how to map geoData using topoJSON files and D3.",
        preview: "",
        githubLink: true,
        link: "https://github.com/antonia-villa/visualize_wa"
      },
  },
  {
    id: 7,
    type: "Invitation Acceptance Report",
    projectMainImage: Object.values(InvitationAcceptance).filter(item => {return item.includes(mainImageText)})[0],
    images: Object.values(InvitationAcceptance).filter(item => {return !item.includes(mainImageText)}),
    tag: ["bi_engineering"],
    delayAnimation: "0",
    modalProjectType: modalProjectType.MULTI_MEDIA,
    modalDetails: 
      {
        project: "Invitation Acceptance Report",
        language: "Airbyte, BigQuery, Postgresql, Looker Studio",
        description: "This report was built for stakeholders to understand the adoption of the product from the initial invitation stage to initial user behavior once the account has been created.",
        preview: "",
        githubLink: false,
        downloadable_pdf: true,
        download_title: "Invitation_Acceptance_Report"
      },
  },
  {
    id: 8,
    type: "Periodic Usage Report",
    projectMainImage: Object.values(PeriodicUsageReport).filter(item => {return item.includes(mainImageText)})[0],
    images: Object.values(PeriodicUsageReport).filter(item => {return !item.includes(mainImageText)}),
    tag: ["bi_engineering"],
    delayAnimation: "0",
    modalProjectType: modalProjectType.MULTI_MEDIA,
    modalDetails: 
      {
        project: "Periodic Usage Report",
        language: "Airbyte, BigQuery, Amplitude API, Postgresql, Looker Studio",
        description: "The Period Usage Report is an external facing report. The purpose is as a tool for tenants to keep track of how their customers are using Logixboard and give them areas in which they can improve in order to increase engagement.",
        preview: "",
        githubLink: false,
        downloadable_pdf: true,
        download_title: "Periodic_Usage_Report"
      },
  },
  {
    id: 9,
    type: "Customer Lifecycle Analysis",
    projectMainImage: Object.values(CustomerAnalysis).filter(item => {return item.includes(mainImageText)})[0],
    images: Object.values(CustomerAnalysis).filter(item => {return !item.includes(mainImageText)}),
    tag: ["bi_engineering"],
    delayAnimation: "0",
    modalProjectType: modalProjectType.MULTI_MEDIA,
    modalDetails: 
      {
        project: "Customer Lifecycle Analysis",
        language: "Shopify, Fivetran, BigQuery, Postgresql, Looker Studio",
        description: "This customer analysis was delivered to a client in order for them to have a single view of their customer base. The goal of the analysis was to dive into customer behavio and their purcahse decision. The information was used to develop strategic marketing campaigns to increase customer's lifetime value.",
        preview: "",
        githubLink: false,
        downloadable_pdf: true,
        download_title: "Customer_Lifecycle_Analysis"
      },
  }
];

export default PortfolioData;
