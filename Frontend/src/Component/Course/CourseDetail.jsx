import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Navbar from "../Layout/Navbar";
import useCourseStore from "../../store/course";

const CourseDetail = () => {
  // Define state for courseDetail and params
  const {courseDetail,updateCourseDetail}=useCourseStore();

  const enrolledCourse=()=>{
    const data = window.confirm('Are you kullu  sure want to enrolled in a course!!.');
    if(data)
    {
      alert('Successfully Enrolled in a Course!!');
    }
  }


  return (
    <>
      <Navbar />
      <div className="font-serif text-center text-2xl bg-blue-600 text-white p-1 m-5 rounded-xl">CourseDetail</div>
      <div className="flex flex-row items-center w-4/6 mx-auto my-10">
        <img
          src={courseDetail.thumbnail}
          alt={courseDetail.name}
          className="h-32 w-32 object-cover mr-10 rounded-lg"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">Course Name:  {courseDetail.name}</h1>
          <p className="text-xl mb-4">Instructor Name:   {courseDetail.instructor}</p>
          <p className="text-gray-800 mb-6">Description:  {courseDetail.description}</p>
          <div className="font-medium text-xl mb-2">Enrollment Status: 
            {courseDetail.enrollmentStatus}
          </div>
          <p className="text-xl mb-4">Duration:  {courseDetail.duration}</p>
          <div className="text-xl mb-4 font-bold">Schedule:   {courseDetail.schedule}</div>
          <div className="text-xl mb-4 font-bold">Location:  {courseDetail.location}</div>
          <div className="mb-4">Pre-requisites:  
            {courseDetail.prerequisites &&
              courseDetail.prerequisites.map((item, key) => (
                <div key={key} className="bg-gray-100 rounded-md p-2 mb-2">
                  {item}
                </div>
              ))}
          </div>
          <div>Syllabus: 
            {courseDetail.syllabus &&
              courseDetail.syllabus.map((item, key) => (
                <div key={key} className="mb-4">
                  <div className="font-bold text-xl mb-2">{item.week}</div>
                  <div className="text-gray-800 mb-2">{item.topic}</div>
                  <div>{item.content}</div>
                </div>
              ))}
          </div>
          <div className="">
            <button className="bg-blue-400 text-white rounded-md w-36 font-serif" onClick={()=>{enrolledCourse();}}>Enrolled</button>
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
