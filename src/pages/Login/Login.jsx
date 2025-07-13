import AuthWrapper from "../../components/AuthWrapper";
import LoginInfo from "./LoginInfo";
import useEmailForm from "../../hooks/useEmailForm";

const Login = () => {
  const {
    email,
    emailError,
    isPopupOpen,
    handleEmailChange,
    handleEmailBlur,
    handleSubmit,
    closePopup,
  } = useEmailForm();

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
  );
};

export default Login;