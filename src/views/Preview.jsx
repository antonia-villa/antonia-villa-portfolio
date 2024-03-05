import React from "react";
import { Link } from "react-router-dom";
import dark from "../assets/img/intro/dark.jpg";
import rtl from "../assets/img/intro/rtl.jpg";

const previewDemo = [
  {
    img: dark,
    title: "Dark & Light (Professional)",
    routerPath: "/home-dark",
    delayAnimation: "50",
  },
  {
    img: rtl,
    title: "Dark & Light (RTL Version)",
    routerPath: "/home-rtl",
    delayAnimation: "",
  },
];

const Preview = () => {
  return (
    <div>
      {/* End .banner */}

      <section className="demo dark">
        <div className="container">
          <div className="row">
            {previewDemo.map((val, i) => (
              <div
                className="col-xs-12 col-sm-6 col-md-6"
                key={i}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              >
                <div className="content text-center">
                  <div className="bg_container">
                    <Link to={val.routerPath} target="_blank" rel="noreferrer">
                      <img
                        src={val.img}
                        alt="demo"
                        className="img-responsive screenshot"
                      />
                    </Link>
                  </div>
                  <h2 className="demo-title">{val.title}</h2>
                  <div className="anchor">
                    <h6>
                      <Link
                        className="btn"
                        to={val.routerPath}
                        target="_blank"
                        rel="noreferrer"
                      >
                        view demo
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End .Demo */}
    </div>
  );
};

export default Preview;
