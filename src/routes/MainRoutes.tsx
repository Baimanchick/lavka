import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import TenderPage from "../pages/TenderPage";
import HomePage from "../pages/homePage/HomePage";
import NewsPage from "../pages/NewsPage";
import QuestionsPage from "../pages/QuestionsPage";
import GosZakupPage from "../pages/GosZakupPage";
import DetailsPage from "../pages/detailsPage/DetailsPage";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/gos" element={<GosZakupPage />} />
        <Route path="/tender" element={<TenderPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/details" element={<DetailsPage />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
