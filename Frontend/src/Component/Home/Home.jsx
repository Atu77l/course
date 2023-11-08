import React from "react";
import Navbar from "./Sidebar";
import Carousel from "../Layout/Carousel";
import Chatbox from '../Layout/Chat'
import Course from '../Course/Box'

const Home = () => {
  return (
    <div>
      <div className="flex flex-row">
        <div className="ml-2 w-[120px]">
          <Navbar />
        </div>
        <div className="grid grid-cols-1 ml-[120px]">
          <Carousel />
          <Course />
          <Chatbox />
        </div>
      </div>
    </div>
  );
};

export default Home;
