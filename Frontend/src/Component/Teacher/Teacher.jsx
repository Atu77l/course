import React,{useState,useEffect} from 'react'
import Navbar from '../Layout/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Teacher = () => {
    const [name, setname] = useState("")
    const [address, setaddress] = useState("")
    const [broker, setbroker] = useState("")
    const [gender, setgender] = useState("")
    const [contact, setcontact] = useState("")
    const [profilePic, setProfilePic] = useState(null)
    const [courseList, setCourseList] = useState([])
    const [email,setemail]=useState("");
    const navigate=useNavigate();
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
        })
        .catch((error) => {
          console.log(error);
        });
    }
    useEffect(() => {
      fetchData();
    }, [])
  return (
    <div>
        <Navbar/>
        {/* Profile Detail */}
        <div className="bg-blue-100 mb-10">
        <div className="grid grid-cols-2">
          <div className="m-10 p-10 bg-white rounded-lg  shadow" >
            <div className="shadow border-2 rounded">
              <h3 className="bg-blue-300 p-2 text-black rounded text-2xl text-center justify-center font-serif" >Profile Detail</h3>
              <div className="sm:grid-cols-2 grid grid-cols-1 mt-3 border-b-2 p-2">
                <label className="text-xl font-serif" >Name  :-</label>
                <h3 className="text-l">{name}</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 mt-3 border-b-2 p-2">
                <label className="text-xl font-serif" >Email Address  :-</label>
                <h3 className="text-l " >{ }</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 mt-3 border-b-2 p-2">
                <label className="text-xl font-serif">Contact Number  :-</label>
                <h3 className="text-l">{contact}</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 mt-3 border-b-2 p-2">
                <label className="text-xl font-serif">Current Home Address  :-</label>
                <h3 className="text-l">{address}</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 mt-3 border-b-2 p-2">
                <label className="text-xl font-serif">Gender  :-</label>
                <h3 className="text-l">{gender}</h3>
              </div>
              
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 p-3 rounded mt-3">
              <button className='font-sans bg-blue-500 rounded-lg text-white text-l h-8' onClick={() => { navigate('/update_profile') }}>Update Profile</button>
              <button className='font-sans bg-blue-500 rounded-lg text-white text-l h-8' onClick={() => { navigate('/update_password'); }}>Change Password</button>
            </div>
          </div>

          {/* Added transaction history table */}
          <div className="bg-white  border-2 p-3 rounded-lg mt-10 mb-10 overflow-x-none overflow-y-auto justify-center ml-10 mr-10">
            <h3 className="text-black font-semibold font-serif bg-blue-300 -mt-3 -ml-3 -mr-3 p-3 justify-center text-center text-xl">My Enrolled Course</h3>
            <hr></hr>
            {/* Render each course detail */}
            {courseList.map((item, key) => (
              <div key={key} className="h-48 mr-5 rounded-lg shadow-lg mt-10 ml-5">
                <div className="flex flex-col pl-28">
                  <div className="pt-1 text-l font-serif font-medium">
                    Course Name: {item.name}
                  </div>
                  <div className="pt-1 text-l font-serif font-medium">
                    Instructor Name: {item.instructor}
                  </div>
                  <div className="pt-1 text-l font-serif font-medium">
                    Duration: {item.duration}
                  </div>
                  <div className="pt-1 text-l font-serif font-medium">
                    Schedule:  {item.schedule}
                  </div>
                  <div className="pt-1 text-l font-serif font-medium">
                    Location:  {item.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
        {/* Add Detail of New Course for User.It will be Publish */}
        <div className="">
            <h1 className='font-serif'>Publish New Course Detail</h1>
            <div className="flex flex-col">
            <label className="ml-4 mt-2 text-black pl-1 text-left font-bold sm:mt-0">Course Name*
            </label>
            <div className="text-center justify-center">
                <input type="email" required placeholder="Enter Email"
                    className="mt-1 outline-0 h-10   border-2 border-[#1565D8] pl-4 ml-4 rounded-lg w-full" value={email} onChange={(e) => {
                        setemail(e.target.value);
                    }} />
            </div>
            </div>
            <div className="flex flex-col">
            <label className="ml-4 mt-2 text-black pl-1 text-left font-bold sm:mt-0">Instructor Name*
            </label>
            <div className="text-center justify-center">
                <input type="email" required placeholder="Enter Email"
                    className="mt-1 outline-0 h-10   border-2 border-[#1565D8] pl-4 ml-4 rounded-lg w-full" value={email} onChange={(e) => {
                        setemail(e.target.value);
                    }} />
            </div>
            </div>
            <div className="flex flex-col">
            <label className="ml-4 mt-2 text-black pl-1 text-left font-bold sm:mt-0">Location*
            </label>
            <div className="text-center justify-center">
                <input type="email" required placeholder="Enter Email"
                    className="mt-1 outline-0 h-10   border-2 border-[#1565D8] pl-4 ml-4 rounded-lg w-full" value={email} onChange={(e) => {
                        setemail(e.target.value);
                    }} />
            </div>
            </div>
            <div className="flex flex-col">
            <label className="ml-4 mt-2 text-black pl-1 text-left font-bold sm:mt-0">Syllabus*
            </label>
            <div className="text-center justify-center">
                <input type="email" required placeholder="Enter Email"
                    className="mt-1 outline-0 h-10   border-2 border-[#1565D8] pl-4 ml-4 rounded-lg w-full" value={email} onChange={(e) => {
                        setemail(e.target.value);
                    }} />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Teacher