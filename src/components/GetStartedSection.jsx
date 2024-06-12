import PropTypes from "prop-types";
import Button from "../components/Button";

const GetStartedSection = ({ title, description, buttonText, imageUrl }) => {
  return (
    <section className="py-16 px-4 bg-red-500 text-white">
      <div className="container mx-auto  flex flex-col lg:flex-row-reverse items-center">
        <div className="lg:w-1/2 lg:pl-8 mb-8 lg:mb-0 text-center lg:text-left">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg mb-8">{description}</p>
          <Button
            as="link"
            to="/login"
            size="medium"
            variant="secondary"
            className="w-full md:w-1/3"
          >
            {buttonText}
          </Button>
        </div>
        <div className="lg:w-1/2">
          <img
            src={imageUrl}
            alt="Get Started"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

GetStartedSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default GetStartedSection;
