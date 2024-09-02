import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chart from "./pages/chart";

export default function RouterApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Chart />} />
      </Routes>
    </Router>
  );
}
