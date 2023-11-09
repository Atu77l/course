import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false);
    const [visible,setVisible]=useState(false);

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    return (
        <>
            <div className="grid grid-cols-1">
                <div className="flex flex-col m-10  p-5 bg-white rounded-lg shadow">
                    
                    <div className="text-[#000000] text-3xl mt-5 ml-4" style={{ fontWeight: "700" }}> <h1>Account Login</h1>  </div>
                    <p className="text-[#8692A6] ml-4 mt-1 p-1 h-18">  If you have already registered, you can login with your username and password.</p>
                    <div className="font-semibold ml-5">  Hello! Lets get started.. </div>
                    <hr className="m-5"></hr>
                    <label className="ml-5 mt-1">Email</label>
                    <div className="text-center justify-center mr-4">
                        <input type="email" placeholder="Enter Email"
                            className="mt-1 outline-0 h-10 border border-[#1565D8] pl-4 ml-4 mr-4 rounded-lg text-[#494949] w-full"
                            value={email} onChange={(e) => { setemail(e.target.value); }}
                        />
                    </div>
                    <label className="mt-2 ml-5 text-[#494949]">Password</label>
                    {visible && <div className="flex flex-row border border-[#1565D8] ml-4 rounded-lg h-10" >
                        <input type="text" placeholder="Enter Your Password"
                            className="mr-5 outline-0  pl-4 w-full rounded-lg border-[#1565D8]" value={password} onChange={(e) => {
                                setpassword(e.target.value);
                            }} />
                    </div>
                    }
                   
                    <div className="grid grid-cols-2 mt-6">
                        <div className="flex flex-row ml-5">
                            <input type="checkbox" checked={rememberMe} onChange={(e) => { setRememberMe(e.target.checked); }} />
                            <div className="text-[#3F4547]">Remember Me</div>
                        </div>
                        <Link to='/forget_password'><div className="text-[#2C73EB] text-right cursor-pointer mr-5">Forgot Password?</div></Link>
                    </div>

                    <div className="text-center justify-center mr-5">
                        <button className="text-[white] bg-[#2C73EB] h-10 text rounded-md mt-3 ml-4 font-bold cursor-pointer w-full" onClick={() => {  }}>  Log In </button>  </div>

                    <div className=" flex flex-row mt-5 ml-5">
                        <div className="text-[#3F4547]">Don't have an account?</div>
                        <Link to='/signup'> <div className="text-[#2C73EB] underline cursor-pointer"> Sign up here </div> </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;

