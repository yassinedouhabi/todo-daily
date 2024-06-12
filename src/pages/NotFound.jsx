import { Link } from "react-router-dom";
import Button from "../components/Button";
import { IoMdArrowRoundBack } from "react-icons/io";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 mx-4 bg-white rounded-lg border-2">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Sorry, the page you are looking for does not exist. It might have been
          removed or its URL might have changed.
        </p>
        <Button
          as={Link}
          to="/"
          variant="primary"
          icon={IoMdArrowRoundBack}
          iconPosition="left"
        >
          Go Back to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
