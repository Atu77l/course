import React, { useState } from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import axios from "axios";
import Navbar from "./Navbar";

const Contact = () => {
  const [name, setname] = useState("")
  const [message, setmessage] = useState("")
  const [phone, setphone] = useState("")
  const [email, setemail] = useState("")

  const onSubmit = () => {
    const data = { "name": name, "email": email, "phone": phone, "message": message }
    console.log(data)

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:4000/contact',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };


    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setname("")
        setemail("")
        setphone("")
        setmessage("")
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <div className="flex text-center justify-center m-10">
          <div className="shadow shadow-zinc-800 rounded-lg w-8/12">
            <div className="font-serif text-blue-600 text-xl">Contact Form</div>
            <hr className="ml-5 mr-5 mt-3 font-bold" />
            <hr className="ml-5 mr-5 mt-1 font-bold" />
            <div className="flex text-center justify-center w-full ">
              <div className="flex flex-col mt-8 outline-0">
                <div className="font-serif font-semibold text-left">Name</div>
                <input type="text" placeholder="Name*" value={name} onChange={(e) => { setname(e.target.value) }} className=" h-10   border-2 border-[gray] rounded-md" />
                <div className="font-serif font-semibold text-left">Email Address</div>
                <input type="text" placeholder="Email*" value={email} onChange={(e) => { setemail(e.target.value) }} className=" h-10 mt-3 border-2 border-[gray] rounded-md" />
                <div className="font-serif font-semibold text-left">Mobile No.</div>
                <input type="text" placeholder="Phone No*" value={phone} onChange={(e) => { setphone(e.target.value) }} className=" mt-3   h-10  border-2 border-[gray] rounded-md" />
                <div className="font-serif font-semibold text-left">Message</div>
                <input type="text" placeholder="Message" value={message} onChange={(e) => { setmessage(e.target.value) }} className=" mt-3  h-10 border-2 border-[gray] rounded-md" />

                <div className="grid grid-cols-1 mt-2">
                  <button className="h-10 mt-3  bg-[#287dd1] rounded-xl font-medium text-white w-96" onClick={onSubmit}> Send Message</button>
                  <div className="text-sm mt-1 mb-5 ">
                    This site is protected by reCAPTCHA and the Google<br />
                    <span className="text-[green]">Privacy Policy</span> and{" "}
                    <span className="text-[green]">Terms of Service</span> apply.
                  </div>
                </div>
              </div>
            </div>
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

export default Contact;
