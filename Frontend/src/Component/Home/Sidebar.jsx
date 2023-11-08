import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import image from "../../Image/a.jpg";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div className="bg-white shadow-xl">
        <div className="bg-white text-center fixed">
          <div className="flex text-center justify-center">
            <img src={image} alt="" className="h-40 rounded-full" />
          </div>
          <div className="font-bold text-2xl mt-10">
            <div className="mt-4 hover:underline bg-blue-400 rounded-xl">Home</div>
              <div className="mt-4 hover:underline bg-blue-400 rounded-xl">About</div>
              <div className="mt-4 hover:underline bg-blue-400 rounded-xl">Contact</div>
              <Link to='/course'><div className="mt-4 hover:underline bg-blue-400 rounded-xl">Course</div></Link>
              <Link to='/profile'><div className="mt-4 hover:underline bg-blue-400 rounded-xl">Profile</div></Link>
          </div>
        </div>
       <div className="fixed w-96 -ml-2" style={{ marginTop: "750px" }}>
        <div className="bg-blue-400 h-40 absolute bottom-0 pr-4">
          <div className="text-center pt-10">
            <LinkedInIcon sx={{ color: "white" }} />
            <TelegramIcon sx={{ color: "white" }} className="ml-3" />
            <InstagramIcon sx={{ color: "white" }} className="ml-3" />
          </div>
          <div className="text-center text-white pt-8">
            Copyright © 2022 XYZ.
          </div>
        </div>
       </div>
      </div>
    </>
  );
};

export default Sidebar;
