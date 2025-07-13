import { useState, useEffect } from "react";

const useEmailForm = () => {
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
      return false;
    }
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return false;
    }
    setIsPopupOpen(true);
    return true;
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closePopup();
      }
    };
    if (isPopupOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isPopupOpen]);

  return {
    email,
    setEmail,
    emailError,
    isTouched,
    isPopupOpen,
    handleEmailChange,
    handleEmailBlur,
    handleSubmit,
    closePopup,
    setIsTouched,
    setIsPopupOpen,
  };
}

export default useEmailForm;