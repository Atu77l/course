import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import MessageIcon from "@mui/icons-material/Message";
import axios from "axios";
import {Link} from 'react-router-dom'
import useCourseStore from "../../store/course";

const CourseList = () => {
  // State for handling message box visibility
  const [handle, sethandle] = useState(false);
  const [searchingWord,setSearchingWord]=useState("")
  const {courseDetail,updateCourseDetail}=useCourseStore();
  const [courseList,setCourseList]=useState([])
  const [course,setCourse]=useState([])

  // Function to fetch course data from API
  const fetchData = () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:4000/get',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setCourseList(response?.data?.detail);
        setCourse(response?.data?.detail);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const handleSearch=()=>{
    console.log(searchingWord)
      const res=courseList.filter(item => item.name === searchingWord || item.instructor === searchingWord);
      setCourse(res);
  }
  // Fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <div className="bg-blue-500 font-serif rounded-xl p-2 text-center text-white text-xl">List of Course</div>
    <div className="flex flex-row m-2">
    <input type="text" onChange={(e)=>{setSearchingWord(e.target.value);}} value={searchingWord} placeholder="Search on the basis of course name and instructor name!!."className="rounded-md border-2 border-blue-600 text-l text-center w-96"/>
    <button className="bg-blue-600 h-8 rounded-md text-white w-36 ml-5" onClick={handleSearch}>Search</button></div>
      {/* Render each course detail */}
      {course.map((item, key) => (
        <div key={key} className="h-48 mr-5 rounded-lg shadow-lg mt-10 ml-5 flex flex-row">
          <div>
            <img src={item.thumbnail} alt={item.name} className="h-28 w-28 m-5 rounded-lg" />
          </div>
          <div className="flex flex-col pl-28">
            <div className="pt-1 text-l font-serif font-medium text-red-600">
             Course Name: {item.name}
            </div>
            <div className="pt-1 text-l font-serif font-semibold text-green-500">
            Instructor Name: {item.instructor}
            </div>
            <div className="pt-1 text-l font-serif font-medium ">
             Duration: {item.duration}
            </div>
            <div className="pt-1 text-l font-serif font-medium">
            Schedule:  {item.schedule}
            </div>
            <div className="pt-1 text-l font-serif font-medium text-blue-600">
            Location:  {item.location}
            </div>
            <div className="pt-1">
              For More Detail, <Link to='/detail' className="font-semibold text-blue" onClick={()=>{updateCourseDetail(item);}}>Click Here!!</Link>
            </div>
          </div>
        </div>
      ))}

      {/* Show more button */}
      <div className="text-center">
        <div className="text-blue-700 font-medium m-20">
          <AddIcon sx={{ color: "blue" }} />
          Show More
        </div>
      </div>

      {/* Message icon */}
      <div className="cursor-pointer">
        <div className="absolute right-0 bottom-5 cursor-pointer bg-blue-800 rounded-full p-3 w-14 mr-10 " onClick={() => { sethandle(!handle) }}>
          <MessageIcon sx={{ color: "white" }} />
        </div>
      </div>
    </>
  );
};

export default CourseList;
