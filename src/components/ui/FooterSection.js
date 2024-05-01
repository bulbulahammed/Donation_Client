"use client"

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from "next/link";
import { useState } from "react";


const FooterSection = () => {

    const [formData, setFormData] = useState({
        question: {
          email: "",
          message: "",
        },
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          question: {
            ...prevData.question,
            [name]: value,
          },
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };
    return (
        <div className="bg-gradient-to-b from-green-500 to-white">
            <div className="grid grid-cols-1  md:grid-cols-2 text-center pt-24 pb-10 container">
                <div className="grid grid-cols-2">
                    <div className="ml-20 text-left">
                        <h3 className="text-base font-light text-white tracking-widest uppercase pb-5">Menu</h3>
                        <ul>
                            <li className="py-1">
                                <Link className="text-base text-white font-light" href="/">Home</Link>
                            </li>
                            <li className="py-1">
                                <Link className="text-base text-white font-light" href="/program">Program</Link>
                            </li>
                            <li className="py-1">
                                <Link className="text-base text-white font-light" href="/stories">Stories</Link>
                            </li>
                            <li className="py-1">
                                <Link className="text-base text-white font-light" href="/blog">Blog</Link>
                            </li>
                            <li className="py-1">
                                <Link className="text-base text-white font-light" href="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="text-left">
                        <h3 className="text-base font-light text-white tracking-widest uppercase pb-5">Share Location</h3>
                        <ul>
                            <li className="py-1">
                                <p className="text-base text-white font-light">Bangladesh</p>
                            </li>
                            <li className="py-1">
                                <p className="text-base text-white font-light">India</p>
                            </li>
                            <li  className="py-1">
                                <p className="text-base text-white font-light">Pakistan</p>
                            </li>
                            <li  className="py-1">
                                <p className="text-base text-white font-light">Nepal</p>
                            </li>
                            <li  className="py-1">
                                <p className="text-base text-white font-light">Indonesia</p>
                            </li>
                        </ul>
                    </div>
                    {/* Social Icon */}
                    <div>
                        <ul className="flex justify-center text-white">
                            <li className='bg-emerald-300 rounded-full p-2 m-1'> <Link href="https://www.facebook.com/"><FacebookOutlinedIcon/></Link> </li>
                            <li className='bg-emerald-300 rounded-full p-2 m-1'> <Link href="https://twitter.com/"><TwitterIcon/></Link></li>
                            <li className='bg-emerald-300 rounded-full p-2 m-1'> <Link href="https://www.instagram.com/"><InstagramIcon/></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center p-10 rounded-lg mx-10" style={{backgroundColor:"#222938"}}>
                    <h2 className="text-white text-3xl font-medium py-10">Have A Question?</h2>
                    <form onSubmit={handleSubmit}>
                        {/*----------- Label For Email ------------*/}
                        <div className="pb-4 max-w-md text-center m-auto">
                            <div className="text-sm pb-3">
                                <p className="text-white text-left">
                                    Email <span className="text-red-600">*</span>
                                </p>
                            </div>
                            <input
                                type="email"
                                className="input input-bordered w-full rounded py-4 text-sm outline-none pl-5"
                                name="email"
                                value={formData.question.email}
                                onChange={handleChange}
                                placeholder="example@mail.com"
                                required
                            />
                        </div>
                        {/*----------- Label For Message ------------*/}
                        <div className="pb-4 max-w-md text-center m-auto">
                            <div className="text-sm pb-3">
                                <p className="text-white text-left">
                                Message <span className="text-red-600">*</span>
                                </p>
                            </div>
                            <input
                                type="text"
                                className="input input-bordered w-full rounded py-4 text-sm outline-none pl-5"
                                name="message"
                                value={formData.question.message}
                                onChange={handleChange}
                                placeholder="Enter Your Question Here"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full max-w-md text-center py-3 rounded btn focus:outline-none my-4 bg-emerald-500 text-white hover:bg-white hover:text-emerald-500 hover:border-emerald-500"
                        >
                            Send Question
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FooterSection;