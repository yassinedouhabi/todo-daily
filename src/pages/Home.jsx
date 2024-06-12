import Hero from "../components/Hero";
import StepSection from "../components/StepSection";
import GetStartedSection from "../components/GetStartedSection";
import getStartedImage from "../assets/get-started-image.png";
import Footer from "../components/Footer";
import { features } from "../data/features";

function Home() {
  return (
    <>
      <Hero
        title="Organizing your day activity with Todo Daily"
        buttonTitle="Get started"
      />
      <StepSection
        title="Don’t let your day doing nothing"
        features={features}
      />
      <GetStartedSection
        title="Achieve your target and won your life"
        description="Join us today and start benefiting from our amazing features and services."
        buttonText="Get Started"
        imageUrl={getStartedImage}
      />
      <Footer />
    </>
  );
}

export default Home;
