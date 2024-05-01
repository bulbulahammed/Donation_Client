"use client"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar } from '@mui/material';
import TextField from '@mui/material/TextField';
import Link from "next/link";
import { useState } from "react";

const SignUp = () => {
    const [formData, setFormData] = useState({
        user: {
          firstName: "",
          lastName: "",
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
            <div className="flex justify-center items-center min-h-screen py-10">
                <div className="border border-gray-400 shadow-lg p-4 bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 text-white">
                    <div className="p-10">
                        {/* Heading */}
                        <div className="pb-10 text-center">
                            <h2 className="text-2xl py-5">Sign Up</h2>
                            <div className="flex justify-center items-center">
                            <Avatar className="bg-green-500 flex justify-center">
                                <LockOutlinedIcon />
                            </Avatar>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            {/*----------- Email Input ------------*/}
                            <div className="flex justify-around">
                                <div className="py-4">
                                    <TextField
                                        id="outlined-firstName-input"
                                        label="First Name"
                                        type="text"
                                        autoComplete="current-firstName"
                                        name="firstName"
                                        value={formData.user.firstName}
                                        onChange={handleChange}
                                        required
                                        className="mr-1"
                                        sx={{
                                            mb: "1rem",
                                            bgcolor: 'transparent',
                                            "& .MuiInputBase-root": {
                                            color: "white",
                                            "& > fieldset": {
                                                borderColor: "rgb(171, 171, 171)",
                                            },
                                            "&:hover fieldset": {
                                                borderColor: "white",
                                            },
                                            "&.Mui-focused fieldset": {
                                                borderColor: "white",
                                            },
                                            },
                                        }}
                                    />
                                </div>
                            <div className="py-4">
                                <TextField
                                    id="outlined-lastName-input"
                                    label="Last Name"
                                    type="text"
                                    autoComplete="current-lastName"
                                    name="lastName"
                                    value={formData.user.lastName}
                                    onChange={handleChange}
                                    required
                                    className="ml-1"
                                    sx={{
                                        mb: "1rem",
                                        bgcolor: 'transparent',
                                        "& .MuiInputBase-root": {
                                          color: "white",
                                          "& > fieldset": {
                                            borderColor: "rgb(171, 171, 171)",
                                          },
                                          "&:hover fieldset": {
                                            borderColor: "white",
                                          },
                                          "&.Mui-focused fieldset": {
                                            borderColor: "white",
                                          },
                                        },
                                      }}
                                />
                            </div>
                            </div>
                            <div className="pb-4 w-full">
                                <TextField
                                    id="outlined-email-input"
                                    label="Email"
                                    type="email"
                                    autoComplete="current-email"
                                    name="email"
                                    value={formData.user.email}
                                    onChange={handleChange}
                                    required
                                    sx={{
                                        mb: "1rem",
                                        width:"100%",
                                        bgcolor: 'transparent',
                                        "& .MuiInputBase-root": {
                                          color: "white",
                                          "& > fieldset": {
                                            borderColor: "rgb(171, 171, 171)",
                                          },
                                          "&:hover fieldset": {
                                            borderColor: "white",
                                          },
                                          "&.Mui-focused fieldset": {
                                            borderColor: "white",
                                          },
                                        },
                                      }}
                                />
                            </div>
                            {/*----------- Input Password------------*/}
                            <div className="py-4 w-full">
                                <TextField
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    name="password"
                                    value={formData.user.password}
                                    onChange={handleChange}
                                    required
                                    sx={{
                                        mb: "1rem",
                                        width:"100%",
                                        bgcolor: 'transparent',
                                        "& .MuiInputBase-root": {
                                          color: "white",
                                          "& > fieldset": {
                                            borderColor: "rgb(171, 171, 171)",
                                          },
                                          "&:hover fieldset": {
                                            borderColor: "white",
                                          },
                                          "&.Mui-focused fieldset": {
                                            borderColor: "white",
                                          },
                                        },
                                      }}
                                />
                            </div>
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="w-1/2 mx-auto text-center py-3 rounded btn focus:outline-none my-4 bg-green-500 text-white hover:bg-white hover:text-green-500 hover:border-green-500">
                                    Sign Up
                                </button>
                            </div>
                        </form>
                        <p className="text-xs">
                            Already Have An Account?
                            <Link href="/login">
                                &nbsp; <span className="text-green-500">Login</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;