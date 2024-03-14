import React from "react";
import "../css/layouts/Home.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="home__container">
      <div className="home__sidebar">
        <Sidebar className="home__sidebar"></Sidebar>
      </div>
      <div className="home__content">
        <Header className="home__header"></Header>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
