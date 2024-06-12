import Logo from "../components/Logo";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import googleIcon from "../assets/google.svg";
import githubIcon from "../assets/github.svg";
import { IoMdArrowRoundBack } from "react-icons/io";

function Login() {
  return (
    <div className="flex items-center justify-center min-h-dvh bg-gray-100">
      <Link to="/">
        <div className=" absolute top-4 left-4 flex items-center gap-2 font-bold text-gray-500 hover:text-gray-800">
          <IoMdArrowRoundBack />
          <span>Back</span>
        </div>
      </Link>
      <div className="bg-white mx-4 my-20 p-8 rounded-lg border-2 w-full max-w-md">
        <div className="mb-8">
          <div className="flex flex-col items-start justify-between">
            <Logo />
            <h3 className="text-3xl md:text-6xl font-bold text-gray-800 my-2">
              Login
            </h3>
          </div>
          <p className="text-base font-normal text-gray-500 md:text-xl capitalize">
            to do your tasks and manage your time
          </p>
        </div>
        <form className="">
          <div className="mb-8">
            <div className="email flex flex-col text-gray-800 mb-4">
              <label htmlFor="email" className="mb-2 font-medium">
                Email:
              </label>
              <input
                type="text"
                name="email"
                placeholder="Enter Your Email ..."
                className="border p-4 font-medium text-base rounded-md focus-within:outline-gray-800 focus:outline-gray-800 focus-visible:outline-gray-800 "
              />
            </div>
            <div className="password flex flex-col text-gray-800">
              <label htmlFor="password" className="mb-2 font-medium">
                Password:
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password ..."
                className="border p-4 font-medium text-base rounded-md focus-within:outline-gray-800 focus:outline-gray-800 focus-visible:outline-gray-800 "
              />
            </div>
          </div>
          <div className="login-btn">
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
          <div className="text-gray-800 mt-4">
            <Link>Forgotten Password ?</Link>
          </div>
        </form>
        <div className="relative my-8 text-center text-gray-500">
          <span className="relative z-10 bg-white px-2 capitalize">
            or Login with
          </span>
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
        </div>
        <div className="social-login-buttons mb-8">
          <div className="google">
            <div className="bg-gray-50 text-gray-800 border flex items-center justify-center p-3 rounded-md gap-2 cursor-pointer mb-4">
              <img src={googleIcon} />
              <span>Continue using Google</span>
            </div>
          </div>
          <div className="github">
            <div className="bg-gray-50 text-gray-800 border flex items-center justify-center p-3 rounded-md gap-2 cursor-pointer">
              <img src={githubIcon} />
              <span>Continue using Github</span>
            </div>
          </div>
        </div>
        <div className="border-t py-4">
          <span className="text-gray-800">
            Not have account ?{" "}
            <Link to="/register" className="text-red-500">
              Sign up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
