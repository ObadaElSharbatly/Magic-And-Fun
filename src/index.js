import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import MagicBalloons from "./pages/magic_balloons/MagicBalloons";
import "tw-elements";
import Decoration from "./pages/decoration/Decoration";
import ScienceShow from "./pages/science_show/ScienceShow";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/magicBalloons" element={<MagicBalloons />} />
        <Route path="/decoration" element={<Decoration />} />
        <Route path="/science-show" element={<ScienceShow />} />
      </Route>
    </Routes>
  </Router>
);
