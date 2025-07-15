import { useState } from "react";

export default function usePasswordConfirmation() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Only validate and set error when editing confirmPassword
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // Do not set error here
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (password && e.target.value !== password) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
  };

  return {
    password,
    confirmPassword,
    error,
    handlePasswordChange,
    handleConfirmPasswordChange,
    setPassword,
    setConfirmPassword,
    setError,
  };
}
