import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.png"
import styles from '../../styles/styles';
import Button from '../../styles/Button';

const navLinks = ["Products", "Customers", "Pricing", "Learn"];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="top-0">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="" />
          </div>

          <nav className="hidden md:flex items-center space-x-15">
            {navLinks.map((link, index) => (
              <Link key={index} to="#" className={"text-gray-600 hover:text-gray-900"}>
                {link}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="light"
              onClick={() => navigate('/Login')}
            >
              Login
            </Button>
            <Button
              variant="dark"
              onClick={() => navigate("/SignUp")}
            >
              SignUp
            </Button>
          </div>

          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 ">
            <Link to="#" className="block py-2 text-gray-600 hover:text-gray-900">Products</Link>
            <Link to="#" className="block py-2 text-gray-600 hover:text-gray-900">Customers</Link>
            <Link to="#" className="block py-2 text-gray-600 hover:text-gray-900">Pricing</Link>
            <Link to="#" className="block py-2 text-gray-600 hover:text-gray-900">Learn</Link>
            <div className="pt-2 space-y-2 border-t border-gray-200">
              <Link to="#" className="block py-2 text-gray-600 hover:text-gray-900">Login</Link>
              <Link to="#" className={styles.mobileSignUpBtnClasses}>
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;