import PropTypes from "prop-types";

function Copyright({ copyrightSymbol, date, text, link, className }) {
  return (
    <div className={className}>
      <p className="text-lg capitalize">
        {copyrightSymbol} {date}{" "}
        <a href="/" className="font-bold">
          {link}
        </a>{" "}
        {text}
      </p>
    </div>
  );
}

Copyright.propTypes = {
  copyrightSymbol: PropTypes.string,
  date: PropTypes.number,
  text: PropTypes.string,
  link: PropTypes.string,
  className: PropTypes.string,
};

export default Copyright;
