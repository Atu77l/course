import React from 'react'
import image5 from "../../Image/a.jpg";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="bg-[#7eaad5] h-24  flex flex-row text-white">
            <img src={image5} alt="" className="rounded-3xl mt-2 lg:ml-28 sm:ml-5 mb-2" />
            <Link to='/'> <div className="mt-9 lg:ml-20 sm:ml-2 text-2xl  font-medium hover:underline">Home</div></Link>
            <div className="mt-9 text-2xl pl-10 font-medium hover:underline">About</div>
            <div className="mt-9 text-2xl pl-10 font-medium ">Contact</div>
            <Link to='/detail/:id'>
                <div className="mt-9 text-2xl pl-10 font-medium ">Course</div>
            </Link>
            <Link to='/profile'>
                <div className="mt-9 text-2xl pl-10 font-medium ">Profile</div>
            </Link>
        </div>
    )
}

export default Navbar