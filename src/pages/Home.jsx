import React from "react";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <main className="text-(--text) w-full min-h-screen bg-(--bg)">
        <Navbar />
        <SearchBar />
        <Tabs />
        <ResultGrid />
        <ToastContainer />
    </main>
  );
};

export default HomePage;
