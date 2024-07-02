// import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { signInWithGoogle } from "./Firebase";
 
function Login() {
  const navigate = useNavigate();
 
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
 
  return (
    <div className="bg-[#0F121A] text-white h-screen flex items-center justify-center">
      <div className="flex w-full max-w-5xl h-[600px] shadow-lg overflow-hidden bg-white">
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
 
        <div className="relative w-1/2 bg-white p-8">
          {/* Image on the top right */}
          <img
            src="https://i.postimg.cc/k4mzmQD1/Subtract.png"
            alt="Image"
            className="absolute top-0 right-0 w-[140px] h-[125px]"
          />
          <form className="space-y-2" onSubmit={handleFormSubmit}>
            <div className="px-10 mt-16">
              <h3 className="text-black font-semibold text-3xl mb-2">Login</h3>
              <p className="text-gray-400 mb-2">Login to access your account</p>
              <label className="block text-black text-sm mb-2 font-medium" htmlFor="email">Email</label>
              <input className="w-full p-2 mt-1 text-black rounded border mb-2 border-gray-600 focus:outline-none focus:ring focus:ring-gray-500" type="email" id="email" />
              <label className="block text-black text-sm font-medium mb-2" htmlFor="password">Password</label>
              <input className="w-full p-2 mt-1 text-black rounded mb-4 border border-gray-600 focus:outline-none focus:ring focus:ring-gray-500" type="password" id="password" />
              <div className="flex space-x-32 mb-4">
                <label className="flex items-center text-black">
                  <input className="mr-2" type="checkbox" />
                  Remember me
                </label>
                <a href="#" className="text-sm text-[#FF8682] hover:underline">Forgot password?</a>
              </div>
              <button className="w-full py-2 mb-2 bg-[#0052CC] rounded-lg">Login</button>
            </div>
 
            <p className="text-center text-black text-sm">Don't have an account?
              <Link to="/signup" className="text-[#FF8682] hover:underline"> Sign up</Link>
            </p>
            <div>
              <p className="text-center text-gray-400 text-sm mb-4">or login with</p>
              <div className="flex justify-center space-x-4">
                {/* <button className="bg-white text-blue-500 border border-blue-600 py-2 rounded px-10 text-2xl"><FaFacebook /></button> */}
                <button type="button" onClick={() => signInWithGoogle(navigate)} className="bg-white border border-blue-600 px-10 text-2xl py-2 rounded"><FcGoogle /></button>
                {/* <button className="bg-white text-[#313131] border border-blue-600 rounded py-2 px-10 text-2xl"><FaApple /></button> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
 
export default Login;