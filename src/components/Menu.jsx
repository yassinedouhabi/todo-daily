import { useEffect } from "react";
import PropTypes from "prop-types";
import { FaUser } from "react-icons/fa6";
import { RiLoginCircleFill } from "react-icons/ri";
import Copyright from "../components/Copyright";
import { Link } from "react-router-dom";

const Menu = ({ isVisible }) => {
  useEffect(() => {
    if (isVisible) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isVisible]);

  return (
    <div
      className={`
        ${isVisible ? "fixed inset-0" : "hidden"}
        flex items-center justify-center bg-red-500 text-white w-full h-full overflow-hidden`}
    >
      <ul className="flex flex-col items-start justify-center gap-4 font-bold text-2xl">
        <li>
          <Link to="/login" className="flex items-center gap-4">
            <FaUser />
            Login
          </Link>
        </li>
        <li>
          <Link to="/" className="flex items-center gap-4">
            <RiLoginCircleFill />
            Sign up
          </Link>
        </li>
      </ul>

      <Copyright
        className={"absolute bottom-1"}
        copyrightSymbol={"©"}
        date={2024}
        link={"Todo Daily. "}
        text={"All rights reserved."}
      />
    </div>
  );
};

Menu.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default Menu;
