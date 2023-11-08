import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import MessageIcon from "@mui/icons-material/Message";
import axios from "axios";

const CourseList = () => {
  // State for handling message box visibility
  const [handle, sethandle] = useState(false);

  // State for storing course details
  const [courseDetail, setCourseDetail] = useState([]);

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
        setCourseDetail(response?.data?.detail);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* Render each course detail */}
      {courseDetail.map((item, key) => (
        <div key={key} className="h-48 mr-5 rounded-lg shadow-lg mt-10 ml-5 flex flex-row">
          <div>
            <img src={item.thumbnail} alt={item.name} className="h-28 w-28 m-5 rounded-lg" />
          </div>
          <div className="flex flex-col pl-28">
            <div className="pt-1 text-2xl font-medium">
              {item.name}
            </div>
            <div className="pt-1 text-2xl font-medium">
              {item.instructor}
            </div>
            <div className="pt-1 text-2xl font-medium">
              {item.duration}
            </div>
            <div className="pt-1 text-2xl font-medium">
              {item.schedule}
            </div>
            <div className="pt-1 text-2xl font-medium">
              {item.location}
            </div>
            <div className="pt-1">
              For More Detail, <Link to='/detail'>Click Here!!</Link>
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
