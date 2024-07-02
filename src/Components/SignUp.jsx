import { useState } from 'react';
import { FaFacebook, FaApple, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-[#0F121A] text-white h-screen flex items-center justify-center">
      <div className="flex w-full max-w-5xl h-[620px] shadow-lg overflow-hidden bg-white">
        {/* Left side */}
        <div className="relative w-1/2 flex items-center justify-center bg-gradient-to-b from-[#0575E6] to-[#02298A] to-[#021B79] p-8 rounded-r-3xl">
          {/* Top-left image */}
          <img
            src="https://i.postimg.cc/1t2WzyYC/Frame-1000005933.png"
            alt="Logo"
            className="absolute top-0 left-0 w-[192px] h-[208px]"
          />
          {/* Bottom-left image */}
          <img
            src="https://i.postimg.cc/v8KG9KK5/Group-2.png"
            alt="Logo"
            className="absolute bottom-0 left-0 w-[192px] h-[208px]"
          />
          <h2 className="text-3xl font-bold text-white">Company Name</h2>
        </div>

        {/* Right side */}
        <div className="relative w-1/2 bg-white">
          {/* Image on the top right */}
          <img
            src="https://i.postimg.cc/k4mzmQD1/Subtract.png"
            alt="Image"
            className="absolute top-0 right-0 w-[140px] h-[125px]"
          />

          {/* Signup form */}
          <form className="space-y-2 px-10 mt-20">
            <h3 className="text-black font-semibold text-3xl mb-2">Sign up</h3>
            <p className="text-gray-500 text-xs">Let’s get you all set up so you can access your personal account.</p>

            {/* Full name and last name on the same line */}
            <div className="flex space-x-4 mb-4">
              <div className="w-1/2">
                <label className="block text-black text-sm font-medium" htmlFor="firstName">First Name</label>
                <input className="w-full p-2 text-black mt-1 rounded border border-black" type="text" id="firstName" />
              </div>
              <div className="w-1/2">
                <label className="block text-black text-sm font-medium" htmlFor="lastName">Last Name</label>
                <input className="w-full p-2 mt-1  text-black rounded border border-black" type="text" id="lastName" />
              </div>
            </div>

            {/* Email and Phone number on the same line */}
            <div className="flex space-x-4 mb-4">
              <div className="w-1/2">
                <label className="block text-black text-sm font-medium" htmlFor="email">Email</label>
                <input className="w-full p-2 mt-1 text-black rounded border border-black" type="email" id="email" />
              </div>
              <div className="w-1/2">
                <label className="block text-black text-sm font-medium" htmlFor="phone">Phone Number</label>
                <input className="w-full p-2 mt-1 rounded border border-black text-black" type="text" id="phone" />
              </div>
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-black text-sm font-medium" htmlFor="password">Password</label>
              <div className="flex items-center">
                <input className="w-full p-2 mt-1 rounded border border-black"
                  type={showPassword ? "text" : "password"}
                  id="password"
                />
                <button type="button" onClick={togglePasswordVisibility} className="absolute right-2">
                  {showPassword ? <FaEyeSlash className="text-black" /> : <FaEye className="text-black" />}
                </button>
              </div>
            </div>

            {/* Agree to terms and conditions */}
            <div className="flex items-center">
              <input className="mr-2" type="checkbox" id="agreeTerms" />
              <label className="text-black text-sm mt-2 mb-2" htmlFor="agreeTerms">I agree to all <span className='text-[#FF8682]'>Terms</span> and <span className='text-[#FF8682]'>Privacy Policies</span></label>
            </div>

            {/* Create Account button */}
            <button className="w-full py-2 bg-[#0052CC] rounded-lg text-white">
              Create Account
            </button>

            {/* Already have an account link */}
            <p className="text-center text-black text-sm">Already have an account? <Link to="/login">
         <a href="#" className="text-[#FF8682] hover:underline"> Login</a>
        </Link></p>

            {/* Or Sign Up with */}
            <div className="">
              <p className="text-center text-gray-400 text-sm mb-4">or sign up with</p>
              <div className="flex justify-center space-x-4">
                <button className="bg-white text-blue-500 border border-blue-600 py-2 rounded px-10 text-2xl"><FaFacebook /></button>
                <button className="bg-white border border-blue-600 py-2 rounded px-10 text-2xl"><FcGoogle /></button>
                <button className="bg-white text-[#313131] border border-blue-600 rounded py-2 px-10 text-2xl"><FaApple /></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
