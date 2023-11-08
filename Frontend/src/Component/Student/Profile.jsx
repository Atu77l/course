import React, { useState, useEffect } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import Navbar from '../Layout/Navbar';

const Profile = () => {
  const [name, setname] = useState("")
  const [address, setaddress] = useState("")
  const [broker, setbroker] = useState("")
  const [gender, setgender] = useState("")
  const [contact, setcontact] = useState("")
  const [profilePic, setProfilePic] = useState(null)
  const navigate = useNavigate();


  const profileDetail = () => {
    
  }
  return (
    <>
     <Navbar/>
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
                <h3 className="text-l " >{}</h3>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 mt-3 border-b-2 p-2">
                <label className="text-xl font-serif">Broker  :-</label>
                <h3 className="text-l">{broker}</h3>
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
            </div>
          </div>
        </div>
    </>
  )
}

export default Profile