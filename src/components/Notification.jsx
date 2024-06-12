import PropTypes from "prop-types";

const Notification = ({ type, message, onClose }) => {
  const getStyles = () => {
    switch (type) {
      case "success":
        return "bg-green-100 border-green-400 text-green-700";
      case "error":
        return "bg-red-100 border-red-400 text-red-700";
      case "warning":
        return "bg-yellow-100 border-yellow-400 text-yellow-700";
      case "info":
        return "bg-blue-100 border-blue-400 text-blue-700";
      default:
        return "bg-gray-100 border-gray-400 text-gray-700";
    }
  };

  return (
    <div className={`border-l-4 p-4 mb-4 ${getStyles()}`} role="alert">
      <div className="flex justify-between items-center">
        <p className="font-bold">
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </p>
        <button onClick={onClose} className="text-lg font-bold">
          &times;
        </button>
      </div>
      <p>{message}</p>
    </div>
  );
};

Notification.propTypes = {
  type: PropTypes.oneOf(["success", "error", "warning", "info"]).isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Notification;
