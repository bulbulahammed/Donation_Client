"use client"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar } from '@mui/material';
import TextField from '@mui/material/TextField';
import Link from "next/link";
import { useState } from "react";

const SignUp = () => {
    const [formData, setFormData] = useState({
        user: {
          email: "",
          password: "",
        },
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          user: {
            ...prevData.user,
            [name]: value,
          },
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };
    
    return (
        <div style={{ backgroundImage: `url('https://i.ibb.co/KsLYy4M/children-school.jpg')` }}
             className="bg-cover bg-center">
            <div className="flex justify-center items-center min-h-screen">
                <div className="border border-gray-400 shadow-lg p-4 bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 text-white">
                    <div className="p-10">
                        {/* Heading */}
                        <div className="pb-10 text-center">
                            <h2 className="text-2xl py-5">Login</h2>
                            <div className="flex justify-center items-center">
                            <Avatar className="bg-green-500 flex justify-center">
                                <LockOutlinedIcon />
                            </Avatar>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            {/*----------- Email Input ------------*/}
                            <div className="pb-4 w-full">
                                <TextField
                                    className="w-full text-white"
                                    id="outlined-email-input"
                                    label="Email"
                                    type="email"
                                    autoComplete="current-email"
                                    name="email"
                                    value={formData.user.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            {/*----------- Input Password------------*/}
                            <div className="py-4">
                                <TextField
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    name="password"
                                    value={formData.user.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full max-w-md text-center py-3 rounded btn focus:outline-none my-4 bg-green-500 text-white hover:bg-white hover:text-green-500 hover:border-green-500">
                                Sign Up
                            </button>
                        </form>
                        <p className="text-xs">
                            Already Have An Account?
                            <Link href="/login">
                                &nbsp; <span className="text-green-500">Sign Up</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;