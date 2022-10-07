import React from "react";
import ScreenThree from "pages/ScreenThree";
import Screen2 from "pages/Screen2";
import ScreenOne from "pages/ScreenOne";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/screenone" element={<ScreenOne />} />
        <Route path="/screen2" element={<Screen2 />} />
        <Route path="/screenthree" element={<ScreenThree />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
