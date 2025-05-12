import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./components/home/HomePage";
import PlanePage from "./components/planes/PlanePage";
import CompetitionPage from "./components/competition/CompetitionPage";
import SubsystemsPage from "./components/subsystems/subsystem";
import TeamPage from "./components/team/TeamPage";
import SupportPage from "./components/support/SupportPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/planes" element={<PlanePage />} />
      <Route path="/competition" element={<CompetitionPage />} />
      <Route path="/subsystems" element={<SubsystemsPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
