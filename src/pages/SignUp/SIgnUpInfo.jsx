import { useEffect, useState } from "react";
import Input from "../../components/Input"
import { validateEmail, validatePassword } from "../../utils/validation";

const SignUpInfo = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    email: ""
  })

  const [formErrors, setFormErrors] = useState({})

  useEffect(() => {
    if(formErrors.firstName && formData?.firstName) {
      setFormErrors((prev) => ({ ...prev, firstName: "" }));
    }
    if(formErrors.lastName && formData?.lastName) {
      setFormErrors((prev) => ({ ...prev, lastName: "" }));
    }
    if(formErrors.email && validateEmail(formData?.email)) {
      setFormErrors((prev) => ({ ...prev, email: "" }));
    }
    if(formErrors.password && validatePassword(formData?.password)) {
      setFormErrors((prev) => ({ ...prev, password: "" }));
    }
    if(formErrors.confirmPassword && formData?.confirmPassword === formData?.password) {
      setFormErrors((prev) => ({ ...prev, confirmPassword: "" }));
    }
  }, [formData])


  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <Input
        label="Fisrt Name"
        type="text"
        placeholder="Enter Your First Name"
        value={formData.firstName}
        name="firstName"
        onChange={handleInputChange}
        onBlur={() => {
          if (!formData.firstName) {
            setFormErrors((prev) => ({ ...prev, firstName: "First name is required" }));
          }
        }}
        emailError={formErrors.firstName}
      />
      <Input
        label="Last Name"
        type="text"
        placeholder="Enter Your Last Name"
        value={formData.lastName}
        name="lastName"
        onChange={handleInputChange}
        onBlur={() => {
          if (!formData.lastName) {
            setFormErrors((prev) => ({ ...prev, lastName: "Last name is required" }));
          }
        }}
        emailError={formErrors.lastName}
      />
      <Input
        label="Email"
        type="text"
        placeholder="Enter your Email"
        name="email"        
        onChange={handleInputChange}
        onBlur={() => {
          if (!validateEmail(formData.email)) {
            setFormErrors((prev) => ({ ...prev, email: "Invalid email address" }));
          }
        }}
        value={formData.email}
        emailError={formErrors.email}
      />
      <Input
        label="Enter Password"
        type="password"
        placeholder="Enter a Password"
        value={formData.password}
        name="password"
        onChange={handleInputChange}
        onBlur={() => {
          if (!validatePassword(formData.password)) {
            setFormErrors((prev) => ({ ...prev, password: "Invalid password" }));
          }
        }}
        emailError={formErrors.password}
      />
      <Input
        label="Confirm Your Password"
        type="password"
        name="confirmPassword"
        placeholder="Confirm your password"
        value={formData.confirmPassword}
        onChange={handleInputChange}
        onBlur={() => {
          if (formData.confirmPassword !== formData.password) {
            setFormErrors((prev) => ({ ...prev, confirmPassword: "Passwords do not match" }));
          }
        }}
        emailError={formErrors.confirmPassword}
      />
    </div>
  )
}

export default SignUpInfo