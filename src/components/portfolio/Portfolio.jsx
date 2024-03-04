import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PortfolioData from "./portfolioData";
import Modal from "./modal/Modal";

const Portfolio = () => {
  const [getModal, setGetModal] = useState(false);
  const [modalDataItem, setModalDataItem] = useState();


  console.log(PortfolioData)

  const handleModal = (id) => {
    setGetModal(true);
    setModalDataItem(PortfolioData.filter(item => item.id === id)[0])
  };

  return (
    <>
      <div className="portfolio-main">
        <Tabs>
          <TabList className="portfolio-tab-list" data-aos="fade-up">
            <Tab>BI ENGINEERING</Tab>
            <Tab>DATA VISUALIZATION</Tab>
            <Tab>SOFTWARE ENGINEERING</Tab>
            <Tab>ALL</Tab>
          </TabList>

          <div className="container">




            <TabPanel>
              <div className="tab-container">
                {PortfolioData.filter((item) => item.tag.includes("bi_engineering")).map(
                  (item) => {
                    const { id, type, projectMainImage, delayAnimation } = item;
                    return (
                      <div
                        key={id}
                        data-aos="fade-right"
                        data-aos-delay={delayAnimation}
                      >
                        <div
                          className="tab-content"
                          onClick={() => handleModal(id)}
                        >
                          <img src={projectMainImage} alt="portfolio project demo" />
                          <h3>
                            <span className="conent-title">{type}</span>
                          </h3>
                        </div>
                        {getModal && <Modal portfolioDataItem={modalDataItem} setGetModal={setGetModal}/>}
                      </div>
                    );
                  }
                )}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="tab-container">
                {PortfolioData.filter((item) => item.tag.includes("data_visualization")).map(
                  (item) => {
                    const { id, type, projectMainImage, delayAnimation } = item;
                    return (
                      <div
                        key={id}
                        data-aos="fade-right"
                        data-aos-delay={delayAnimation}
                      >
                        <div
                          className="tab-content"
                          onClick={() => handleModal(id)}
                        >
                          <img src={projectMainImage} alt="portfolio project demo" />
                          <h3>
                            <span className="conent-title">{type}</span>
                          </h3>
                        </div>
                        {getModal && <Modal portfolioDataItem={modalDataItem} setGetModal={setGetModal}/>}
                      </div>
                    );
                  }
                )}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="tab-container">
                {PortfolioData.filter((item) =>
                  item.tag.includes("software_engineering")
                ).map((item) => {
                  const { id, type, projectMainImage, delayAnimation } = item;
                  return (
                    <div
                      key={id}
                      data-aos="fade-right"
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className="tab-content"
                        onClick={() => handleModal(id)}
                      >
                        <img src={projectMainImage} alt="portfolio project demo" />
                        <h3>
                          <span className="conent-title">{type}</span>
                        </h3>
                      </div>
                      {getModal && <Modal portfolioDataItem={modalDataItem} setGetModal={setGetModal}/>}
                    </div>
                  );
                })}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="tab-container">
                {PortfolioData.map((item) => {
                  const { id, type, projectMainImage, delayAnimation } = item;

                  return (
                    <div
                      key={id}
                      data-aos="fade-right"
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className="tab-content"
                        onClick={() => handleModal(id)}
                      >
                        <img src={projectMainImage} alt="portfolio project demo" />
                        <h3>
                          <span className="conent-title">{type}</span>
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabPanel>


          </div>
        </Tabs>
      </div>
      {getModal && <Modal portfolioDataItem={modalDataItem} setGetModal={setGetModal}/>}{" "}
    </>
  );
};

export default Portfolio;
