import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AnnouncementPage from "../pages/AnnouncementPage";
import TenderPage from "../pages/TenderPage";
import HomePage from "../pages/homePage/HomePage";
import NewsPage from "../pages/NewsPage";
import QuestionsPage from "../pages/QuestionsPage";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/announcement" element={<AnnouncementPage />} />
        <Route path="/tender" element={<TenderPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
