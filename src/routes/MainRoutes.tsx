import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import TotalPage from "../pages/TotalPage";
import ApplicationPage from "../pages/ApplicationPage";
import AnnouncementPage from "../pages/AnnouncementPage";
import PurchasePage from "../pages/PurchasePage";
import TenderPage from "../pages/TenderPage";
import HomePage from "../pages/homePage/HomePage";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/total" element={<TotalPage />} />
        <Route path="/application" element={<ApplicationPage />} />
        <Route path="/announcement" element={<AnnouncementPage />} />
        <Route path="/purchase" element={<PurchasePage />} />
        <Route path="/tender" element={<TenderPage />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
