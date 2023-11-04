import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AnnouncementPage from "../pages/AnnouncementPage";
import TenderPage from "../pages/TenderPage";
import HomePage from "../pages/homePage/HomePage";
import NewsPage from "../pages/NewsPage";
import QuestionsPage from "../pages/QuestionsPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ForgottenPassword from "../pages/ForgottenPassword";
import RegisterPod from "../pages/RegisterPod";
import RegisterZak from "../pages/RegisterZak";
import RegisterPassword from "../pages/RegisterPassword";
import RegisterCode from "../pages/RegisterCode";
import Account from "../pages/Account";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/announcement" element={<AnnouncementPage />} />
        <Route path="/tender" element={<TenderPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/account" element={<Account />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgotten" element={<ForgottenPassword />} />
      <Route path="/pod" element={<RegisterPod />} />
      <Route path="/zak" element={<RegisterZak />} />
      <Route path="/pass" element={<RegisterPassword />} />
      <Route path="/code" element={<RegisterCode />} />
    </Routes>
  );
}

export default MainRoutes;
