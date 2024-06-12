import PropTypes from "prop-types";
import { useState } from "react";
import Button from "./Button";

const Form = ({ fields, onSubmit, initialValues = {}, validationSchema }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (validationSchema) {
      for (const [field, rule] of Object.entries(validationSchema)) {
        if (rule.required && !values[field]) {
          newErrors[field] = `${field} is required`;
        }
        if (rule.pattern && !rule.pattern.test(values[field])) {
          newErrors[field] = `${field} is invalid`;
        }
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(values);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name} className="mb-4">
          <label
            htmlFor={field.name}
            className="block text-gray-800 font-bold mb-2"
          >
            {field.label}
          </label>
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            value={values[field.name] || ""}
            onChange={handleChange}
            className="w-full p-4 border rounded-md focus:outline-none focus:border-blue-500"
            {...field.props}
          />
          {errors[field.name] && (
            <p className="text-red-500 text-sm">{errors[field.name]}</p>
          )}
        </div>
      ))}
      <Button type="submit">Submit</Button>
    </form>
  );
};

Form.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      props: PropTypes.object,
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  validationSchema: PropTypes.object,
};

export default Form;
