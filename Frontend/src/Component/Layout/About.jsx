import React from 'react'
import Navbar from './Navbar'
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const About = () => {
  return (
    <>
      <Navbar />
      <div className='font-serif text-center font-semibold bg-blue-400 text-white m-5 rounded-lg text-xl'>About Us</div>
      <div className='font-serif p-4 text-l shadow-blue-600 rounded-xl m-10 shadow-xl'>
        <span className='font-bold'>XYZ</span> is an online learning platform that offers a wide range of courses on various subjects. The platform allows instructors to create and sell courses to students around the world. Courses on XYZ cover a diverse array of topics, including but not limited to:

        <div className='font-serif p-2'><span className='text-blue-600'>Technology and Programming:</span> Courses on programming languages, web development, mobile app development, data science, and more.</div>

        <div className='font-serif p-2'><span className='text-blue-600'>Business and Entrepreneurship:</span> Courses on business development, marketing, finance, leadership, and entrepreneurship.</div>

        <div className='font-serif p-2'><span className='text-blue-600'>Personal Development:</span> Courses on personal productivity, communication skills, time management, and self-improvement.</div>

        <div className='font-serif p-2'><span className='text-blue-600'>Design:</span> Courses on graphic design, web design, UX/UI, and other creative skills.</div>

        <div className='font-serif p-2'><span className='text-blue-600'>Language Learning:</span> Courses on learning new languages.</div>

        <div className='font-serif p-2'><span className='text-blue-600'>Health and Fitness:</span> Courses on yoga, fitness, nutrition, and wellness.</div>

        <div className='font-serif p-2'><span className='text-blue-600'>Music and Arts:</span> Courses on music theory, playing instruments, drawing, painting, and other artistic pursuits.</div>

        <div className='text-gray-800'>XYZ operates on a marketplace model, where instructors can create courses, set their own prices, and make them available to students globally. Users can enroll in courses, and once enrolled, they typically have lifetime access to the course materials. Courses often include video lectures, quizzes, assignments, and discussion forums to facilitate interaction between instructors and students.

        While XYZ provides a platform for a wide range of courses, it's important to note that the quality of courses can vary. Before enrolling in a course, users can read reviews and check the ratings to get an idea of the course's quality and effectiveness. Additionally, XYZ frequently offers discounts and promotions, making courses more accessible to a broader audience.</div>
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
  )
}

export default About