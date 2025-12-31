import React from "react";
import SearchBar from "../components/home/SearchBar";
import Tabs from "../components/home/Tabs";
import ResultGrid from "../components/home/ResultGrid";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer/Footer';

const HomePage = () => {
  return (
    <div className="text-(--text) w-full min-h-screen bg-(--bg)">
        <Navbar />
        <SearchBar />
        <Tabs />
        <ResultGrid />
        <ToastContainer />
        <Footer />
    </div>
  );
};

export default HomePage;
