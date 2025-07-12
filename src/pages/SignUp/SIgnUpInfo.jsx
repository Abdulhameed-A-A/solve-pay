import Input from "../../components/Input"

const SignUpInfo = ({
  handleEmailBlur,
  handleEmailChange,
  emailError
}) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <Input
        label="Fisrt Name"
        type="text"
        placeholder="Enter Your First Name"
      />
      <Input
        label="Last Name"
        type="text"
        placeholder="Enter Your Last Name"
      />
      <Input
        label="Email"
        type="text"
        placeholder="Enter your Email"
        handleEmailBlur={handleEmailBlur}
        handleEmailChange={handleEmailChange}
        emailError={emailError}
      />
      <Input
        label="Enter Password"
        type="password"
        placeholder="Enter a Password"
      />

      <Input
        label="Confirm Your Password"
        type="password"
        placeholder="Confirm your password"
      />
    </div>
  )
}

export default SignUpInfo