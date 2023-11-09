import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Signup = () => {
    const navigate = useNavigate()
    const [name, setname] = useState("")
    const [password, setpassword] = useState("")
    const [email, setemail] = useState("")
    const [wait, setWait] = useState(false);
    const [warn, setWarn] = useState(false)
    const [checked, setChecked] = useState(true)
    const [visible, setVisible] = useState(false)

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    function validatepassword(str) {
        // Check for lowercase, uppercase, and digit
        const hasLowercase = /[a-z]/.test(str);
        const hasUppercase = /[A-Z]/.test(str);
        const hasDigit = /\d/.test(str);

        // Check for special characters using a regular expression
        const hasSpecialChars = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(str);

        // Check the length (minimum 8 characters)
        const isLengthValid = str.length >= 7;

        // Check if all conditions are met
        return hasLowercase && hasUppercase && hasDigit && hasSpecialChars && isLengthValid;
    }

    return (
        <>
            <div className="grid grid-cols-1">
                <div className="flex flex-col p-5 m-5 bg-white rounded-lg lg:w-10/12 shadow-lg shadow-blue-600">
                    <div className="text-[#000000] text-3xl mt-1 ml-4" style={{ fontWeight: "700" }}>
                        <h1>Create Account</h1>
                    </div>
                    <div className="ml-5 font-semibold">
                        Hello! Let's get started...
                    </div>
                    <hr className="m-5"></hr>

                    <div className="flex flex-col">
                        <label className="ml-5 text-[#494949] pl-1">Full Name*</label>
                        <div className="text-center justify-center">
                            <input type="text" required placeholder="Enter Your Name" className="mt-1 outline-0 h-10   border border-[#1565D8] pl-4 ml-4 rounded-lg w-11/12" value={name} onChange={(e) => {
                                setname(e.target.value);
                            }} />
                        </div>
                        <div className="flex flex-col">
                            <label className="ml-5 mt-2 text-[#494949] pl-1 sm:mt-0">Email Address*
                            </label>
                            <div className="text-center justify-center">
                                <input type="email" required placeholder="Enter Email"
                                    className="mt-1 outline-0 h-10   border border-[#1565D8] pl-4 ml-4 rounded-lg w-11/12" value={email} onChange={(e) => {
                                        setemail(e.target.value);
                                    }} />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label className="mt-2 ml-5 text-[#494949] pl-1">Password*</label>
                            {visible && <div className="flex flex-row border border-[#1565D8] ml-4 rounded-lg h-10" >
                                <input type="text" placeholder="Enter Your Password"
                                    className="mr-5 outline-0  pl-4 w-full rounded-lg border-[#1565D8]" value={password}
                                    onChange={(e) => { setpassword(e.target.value); }} />
                                <VisibilityIcon sx={{ cursor: "pointer", marginLeft: "20px", marginRight: "10px", marginTop: "6px" }} onClick={() => { setVisible(false) }} />
                            </div>
                            }
                            {!visible && <div className="flex flex-row border border-[#1565D8] rounded-lg ml-4 h-10">
                                <input type="password" placeholder="Enter Your Password" className="mr-5 outline-0   pl-4 w-full rounded-lg border-[#1565D8]"
                                    value={password} onChange={(e) => { setpassword(e.target.value); }} />
                                <VisibilityOffIcon sx={{ cursor: "pointer", marginLeft: "20px", marginRight: "10px", marginTop: "6px" }} onClick={() => { setVisible(true) }} />
                            </div>}

                            <div className="text-xs italic ml-5" style={{ color: warn === true ? "black" : "red" }}>Password: Min 7 chars, 1 lowercase, 1 uppercase, 1 digit, 1 special required</div>
                        </div>
                    </div>


                    <button className="text-[white] bg-[#2C73EB] h-10  text rounded-md mt-2 ml-4 font-bold cursor-pointer  mr-5" onClick={() => { setWait(false); }}>
                        Create account</button>

                    <div className="grid grid-cols-1">
                        <div className="flex flex-row mt-2 ml-5">
                            <div className="text-[#3F4547]">Already Registered!!?</div>
                            <Link to='/'><div className="text-[#0369a8] pl-1 ml-5 underline cursor-pointer">Sign In</div></Link>
                        </div>
                        <div className="flex flex-row mt-2 ml-5">
                            <div className="text-[#3F4547]">Forgot Password!!?</div>
                            <Link to='/forget_password' className="text-[#0369a8] pl-1 ml-5 underline cursor-pointer">Forgot Password</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Signup;