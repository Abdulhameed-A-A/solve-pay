import AuthWrapper from "../../components/AuthWrapper";
import LoginInfo from "./LoginInfo";
import { useEffect, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (isTouched) {
      if (!value) {
        setEmailError("Email is required");
      } else if (!validateEmail(value)) {
        setEmailError("Please enter a valid email address");
      } else {
        {/* Success Icon */ }
        setEmailError("");
      }
    }
  };

  const handleEmailBlur = () => {
    setIsTouched(true);
    if (!email) {
      setEmailError("Email is required");
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsTouched(true);

    if (!email) {
      setEmailError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    console.log("Signing up with email:", email);
    setIsPopupOpen(true)
  };

  const closePopup = () => {
    setIsPopupOpen(false)
  }


  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closePopup();
      }
    };

    if (isPopupOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isPopupOpen])

  return (
    <AuthWrapper
      handleSubmit={handleSubmit}
      emailError={emailError}
      email={email}
    >
      <LoginInfo
        closePopup={closePopup}
        emailError={emailError}
        email={email}
        handleEmailBlur={handleEmailBlur}
        handleEmailChange={handleEmailChange}
        isPopupOpen={isPopupOpen}
        handleSubmit={handleSubmit}
      />
    </AuthWrapper>
  )
}

export default Login;