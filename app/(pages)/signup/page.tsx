"use client";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface FormData {
  email: string;
  password: string,
  name: string
}

const SignUp = () => {

  const router = useRouter();
  const InputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (InputRef.current) {
      InputRef.current.focus();
    }
  },[])

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    name :""
  });

  const [disabled, setDisabled] = useState(true); 
  useEffect(() => {
    const isFilled = Object.values(formData).every(value => value !== ""); 
    const isPasswordValid = formData.password.trim().split('').length > 5;

    setDisabled(!isFilled || !isPasswordValid)
  },[formData])


  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); 
  


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const registerUser = async()=> {
    try {
      setLoading(true); 
      const { data } = await axios.post("/api/users/signup", formData ); 
      setLoading(false); 

      if(data?.success)
        router.push("/login"); 
      
    } catch (error: any) {
      setError(error.response.data.error);
    }
  }

  const handleSubmit = async(event: React.FormEvent) => {
    event.preventDefault();
    console.log(formData);
    await registerUser()
  }

  return (
    <div className="w-screen h-screen absolute top-0 flex justify-center items-center bg-black text-white">
      <form className="w-[350px] sm:w-[400px] h-[400px] flex flex-col justify-center" onSubmit={handleSubmit}>

      <div>
          <label htmlFor="name" className="text-lg">
            Name
          </label>
          <input
            name="name"
            type="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder=""
            ref={InputRef}
            className="w-full py-2 px-3 mt-2  rounded-lg bg-black border-2 border-[#202020] placeholder:text-gray-500 placeholder:text-md"
          />
        </div>

        <div className="mt-3">
          <label htmlFor="email" className="text-lg">
            Email address
          </label>
          <input
            name="email"
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder=""
            className="w-full py-2 px-3 mt-2  rounded-lg bg-black border-2 border-[#202020] placeholder:text-gray-500 placeholder:text-md"
          />
        </div>

        <div className="mt-3">
          <label htmlFor="password" className="text-lg">
            Password
          </label>
          <input
            name="password"
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="***"
            className="w-full py-2 px-3 mt-2  rounded-lg bg-black border-2 border-[#202020] placeholder:text-gray-500 placeholder:text-md"
          />
        </div>
        
        {
          error && <p className="mt-3 text-red-500 text-sm text-center">{error}</p>
        }

        <button 
          disabled={disabled}
          className={`w-full py-2 px-3 mt-6 text-black rounded-lg bg-white ${disabled? "bg-[#ffffffad] cursor-not-allowed": " bg-green-theme-green hover:bg-green-500 cursor-pointer"} active:bg-green-500`}>
           {loading? "Registering User..." : "Sign Up"}
        </button>


        <Link href={"/login"} className="text-center mt-4 text-sm hover:text-theme-green">Already a User ? Login</Link>
      </form>
    </div>
  );
};

export default SignUp;
