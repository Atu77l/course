import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import axios from "axios";
import Navbar from "../Layout/Navbar";

const CourseDetail = () => {
  // Define state for courseDetail and params
  const [courseDetail, setCourseDetail] = useState({});
  const params = useParams();

  // Function to fetch course data
  const fetchData = () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://localhost:4000/get/${params.id}`, // Replace :id with actual course ID
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log("item data", JSON.stringify(response.data));
        setCourseDetail(response?.data?.detail[0]);
        console.log(courseDetail);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Use useEffect to fetch data when component mounts or params.id changes
  useEffect(() => {
    fetchData();
  }, [params.id]);

  return (
    <>
      <Navbar />
      <div className="flex flex-row items-center w-4/6 mx-auto my-10">
        <img
          src={courseDetail.imagelink}
          alt={courseDetail.name}
          className="h-32 w-32 object-cover mr-10 rounded-lg"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{courseDetail.name}</h1>
          <p className="text-xl mb-4">{courseDetail.instructor}</p>
          <p className="text-gray-800 mb-6">{courseDetail.description}</p>
          <div className="font-medium text-xl mb-2">
            {courseDetail.enrollmentStatus}
          </div>
          <p className="text-xl mb-4">{courseDetail.duration}</p>
          <div className="text-xl mb-4 font-bold">{courseDetail.schedule}</div>
          <div className="text-xl mb-4 font-bold">{courseDetail.location}</div>
          <div className="mb-4">
            {courseDetail.prerequisites &&
              courseDetail.prerequisites.map((item, key) => (
                <div key={key} className="bg-gray-100 rounded-md p-2 mb-2">
                  {item}
                </div>
              ))}
          </div>
          <div>
            {courseDetail.syllabus &&
              courseDetail.syllabus.map((item, key) => (
                <div key={key} className="mb-4">
                  <div className="font-bold text-xl mb-2">{item.week}</div>
                  <div className="text-gray-800 mb-2">{item.topic}</div>
                  <div>{item.content}</div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="bg-[#7eaad5] w-screen h-40">
        <div className="text-center pt-10">
          <LinkedInIcon sx={{ color: "white" }} />
          <TelegramIcon sx={{ color: "white" }} className="ml-3" />
          <InstagramIcon sx={{ color: "white" }} className="ml-3" />
        </div>
        <div className="text-center text-white pt-8 font-bold text-xl">
          Copyright © 2022 XYZ - All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default CourseDetail;
