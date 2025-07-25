import Input from "../../components/Input";

const LoginInfo = ({
  closePopup,
  emailError,
  handleEmailBlur,
  handleEmailChange,
  isPopupOpen
}) => {

  return (
    <>
      <div className="flex flex-col items-center space-y-5 mb-[30px]">
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          label="Email"
          handleEmailBlur={handleEmailBlur}
          handleEmailChange={handleEmailChange}
          emailError={emailError}
        />
        <Input
          type="password"
          name="password"
          placeholder="Enter your Password"
          label="Password"
        />
      </div>





      {isPopupOpen && (
        <div
          className="fixed inset-0 bg-gray/80 backdrop-blur-md bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closePopup}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl p-10 max-w-lg w-full relative animate-bounce-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close X Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-6 text-2xl text-gray-400 hover:text-gray-600 transition-colors"
            >
              ×
            </button>

            {/* Success Icon */}
            <div className="text-6xl text-green-500 text-center mb-6">
              ✓
            </div>


            <h2 className="text-3xl font-light text-gray-800 text-center mb-6">
              Welcome!
            </h2>


            <p className="text-gray-600 text-lg leading-relaxed text-center mb-8">
              Thank you for signing up! Your account has been created successfully.
              You will receive a confirmation email shortly.
            </p>


            <button
              onClick={closePopup}
              className="w-full bg-myGreen text-white py-3 px-6 rounded-lg text-base font-medium hover:bg-myGreen/80 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginInfo;