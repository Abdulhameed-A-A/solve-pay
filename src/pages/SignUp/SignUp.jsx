import AuthWrapper from "../../components/AuthWrapper";
import SignUpInfo from "./SIgnUpInfo";
import useEmailForm from "../../../Replaced Codes/useEmailForm";

const SignUpPage = () => {
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
    <>
      <AuthWrapper isLogin={false}>
        <SignUpInfo
          closePopup={closePopup}
          emailError={emailError}
          email={email}
          handleEmailBlur={handleEmailBlur}
          handleEmailChange={handleEmailChange}
          isPopupOpen={isPopupOpen}
          handleSubmit={handleSubmit}
        />
      </AuthWrapper>
    </>
  );
};

export default SignUpPage;