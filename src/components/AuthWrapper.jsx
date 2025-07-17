import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import styles from "../styles/AuthWrapperStyles";
import Button from "../styles/Button";

const AuthWrapper = ({ children, isLogin, handleSubmit, emailError, email }) => {

  return (
    <div className={styles.wrapperContainer}>
      <div className={styles.cardContainer}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <img
              src={logo}
              alt="Solve Pay logo"
              className={styles.logoImg}
            />
          </Link>
        </div>

        <div className={styles.welcomeContainer}>
          <p className={styles.welcomeText}>{isLogin ? "Welcome Back." : "Welcome to Solve Pay."}</p>
        </div>

        {children}

        <div className={styles.buttonContainer}>
          <Button
            variant='dark'
            className="px-20"
            onClick={handleSubmit}
            disabled={!!emailError || !email}
          >{isLogin ? "Login" : "SignUp"}</Button>
        </div>

        <div className={styles.linkContainer}>
          <p className={styles.linkText}>{isLogin ? "Don't have an account?" : "Already have an account?"} <Link to={isLogin ? "/SignUp" : "/Login"} className={styles.linkStyle}>{isLogin ? "Sign Up" : "Log In"}</Link></p>
        </div>

        <style>{`
          @keyframes bounce-in {
            0% {
              transform: translateY(-50px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
          .animate-bounce-in {
            animation: bounce-in 0.3s ease-out;
          }
        `}</style>
      </div>
    </div>
  )
}

export default AuthWrapper;