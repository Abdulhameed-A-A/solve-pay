import AuthWrapper from "../../components/AuthWrapper"
import SignUpInfo from "./SIgnUpInfo"

const SignUpPage = () => {
  return (
    <>
      <AuthWrapper isLogin={false}>
        <SignUpInfo />
      </AuthWrapper>
    </>
  )
}

export default SignUpPage