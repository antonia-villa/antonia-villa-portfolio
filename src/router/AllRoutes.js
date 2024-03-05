import React from "react";
import HomeRtl from "../views/all-home-version/HomeRtl";
import NotFound from "../views/NotFound";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const AllRoutes = () => {
  return (
    <BrowserRouter>
        <ScrollTopBehaviour />
        <Routes>
          <Route path="/" element={<HomeRtl />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
