import PropTypes from "prop-types";
import HeroImage from "../assets/hero_image.png";
import Button from "./Button";

function Hero({ title, buttonTitle }) {
  return (
    <section className="container mx-auto px-4 flex flex-col items-center justify-center text-center ">
      <h1 className="font-bold md:text-4xl text-2xl text-center mx-auto my-12 md:max-w-[40%]">
        {title}
      </h1>
      <Button
        as="link"
        to="/login"
        size="large"
        className="w-full md:w-1/3 md:*:text-3xl"
      >
        {buttonTitle}
      </Button>
      <img src={HeroImage} className="mx-auto w-full md:max-w-[70%]" />
    </section>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
};

export default Hero;
