import PropTypes from "prop-types";
import lightIcon from "../assets/light_icon.svg"; // Adjust the path according to your project structure
import Icon from "../assets/icon.svg"; // Adjust the path according to your project structure
import { Link } from "react-router-dom";

const Logo = ({ isMenuVisible }) => {
  return (
    <div className={isMenuVisible ? "relative z-10" : null}>
      <Link
        to="/"
        className={`flex items-center gap-2 ${
          isMenuVisible ? "text-white" : "text-red-500"
        } dark:text-white font-bold text-xl`}
      >
        <img
          src={isMenuVisible ? lightIcon : Icon}
          className="w-10"
          alt="Todo Daily Logo"
        />
        <span className={`${isMenuVisible && "hidden"}`}>Todo Daily</span>
      </Link>
    </div>
  );
};

Logo.propTypes = {
  isMenuVisible: PropTypes.bool,
};

export default Logo;
