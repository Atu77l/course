import React from 'react'
import image5 from "../../Image/a.jpg";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="bg-[#7eaad5] h-16 flex flex-row text-white">
            <img src={image5} alt="" className="rounded-full mt-2 lg:ml-28 sm:ml-5 mb-2" />
            <Link to='/'><div className="lg:ml-20 sm:ml-2  mt-3 text-xl  font-medium hover:underline">Home</div></Link>
            <Link to='/about'><div className="text-xl mt-3 pl-4 font-medium hover:underline">About</div></Link>
            <Link to='/contact'><div className="text-xl mt-3 pl-4 font-medium ">Contact</div></Link>
            <Link to='/detail'><div className="text-xl mt-3 pl-4 font-medium ">Course</div></Link>
            <Link to='/profile'> <div className="text-xl mt-3 pl-4 font-medium ">Profile</div></Link>
        </div>
    )
}

export default Navbar