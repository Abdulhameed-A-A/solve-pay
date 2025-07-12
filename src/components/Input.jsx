import { useState } from "react";

const EyeIcon = ({ open }) => (
  open ? (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.657.336-3.234.938-4.675M15 12a3 3 0 11-6 0 3 3 0 016 0zm6.062-4.675A9.956 9.956 0 0122 9c0 5.523-4.477 10-10 10a9.956 9.956 0 01-4.675-.938M15.535 8.465l-7.07 7.07" /></svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm7-2s-2.686-5-10-5-10 5-10 5 2.686 5 10 5 10-5 10-5z" /></svg>
  )
);

const Input = ({ type, name, placeholder, label, emailError, handleEmailBlur, handleEmailChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="flex flex-col space-y-2 relative">
      <label htmlFor={name} className="font-medium text-[#5f5f5f] pl-[5px]">{label}</label>
      <div className="relative">
        <input
          name={name}
          type={isPassword && showPassword ? "text" : type}
          className="SignUp-Input text-[#4a4a4a] rounded-[5px] pr-10"
          placeholder={placeholder}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
        />
        {isPassword && (
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 text-lg focus:outline-none"
            tabIndex={-1}
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            <EyeIcon open={showPassword} />
          </button>
        )}
      </div>
      {emailError && (
        <p className="text-red-500 text-sm mt-1">{emailError}</p>
      )}
    </div>
  )
}
export default Input;