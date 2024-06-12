import PropTypes from "prop-types";

const StepSection = ({ title, features }) => {
  return (
    <section className="my-32">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-24 h-24 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

StepSection.propTypes = {
  title: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default StepSection;
