import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import { authClasses } from "../styles/authClassess";

const AuthWrapper = ({ children, isLogin = true, handleSubmit, emailError, email }) => {


  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col  space-y-5 w-[450px] p-6 bg-[#fffddo] rounded-[20px] shadow-sm border border-gray-200 font-sans">
        <div className="flex">
          <Link to="/">
            <img
              src={logo}
              alt="Solve Pay logo"
              className="w-[80%]"
            />
          </Link>
        </div>

        <div className="flex flex-col items-center space-y-7">
          <p className="text-[#b88909] text-[22px] font-bond">{isLogin ? "Welcome Back." : "Welcome to Solve Pay."}</p>
        </div>

        {children}

        <div className="flex flex-col items-center ]">
          <button
            className={`${authClasses} px-20 } text-[15px]`}
            onClick={handleSubmit}
            disabled={!!emailError || !email}
          >{isLogin? "Login": "SignUp"}</button>
        </div>



        <div className="">
          <p className="text-gray-500 text-[15px]">{isLogin ? "Don't have an account?" : "Already have an account?"} <Link to={isLogin ? "/SignUp" : "/Login"} className="text-myGreen text-[15px] underline underline-offset-3">{isLogin ? "Sign Up" : "Log In"}</Link></p>
        </div>


        <style jsx>{`
        @keyframes bounce-in {
          0% {
            transform: translateY(-50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.3s ease-out;
        }
      `}</style>

      </div>
    </div>
  )
}

export default AuthWrapper;