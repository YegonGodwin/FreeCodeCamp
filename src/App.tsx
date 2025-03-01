import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import NewsPage from "./pages/NewsPage";
import DetailedNews from "./pages/DetailedNews";
import ScoresPage from "./pages/ScoresPage";
import FixturesPage from "./pages/FixturesPage";
import TransfersPage from "./pages/TransfersPage";
import TeamPage from "./pages/TeamPage";
import PlayerPage from "./pages/PlayerPage";
import QuizPage from "./pages/QuizPage";
import PodCastPage from "./pages/PodCastPage";
import SearchResultsPage from "./pages/SearchResultsPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<DetailedNews />} />
        <Route path="/scores" element={<ScoresPage />} />
        <Route path="/fixtures" element={<FixturesPage />} />
        <Route path="/transfers" element={<TransfersPage />} />
        <Route path="/teams/:id" element={<TeamPage />} />
        <Route path="/players/:id" element={<PlayerPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/podcasts" element={<PodCastPage />} />
        <Route path="/search" element={<SearchResultsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
