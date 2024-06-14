import PropTypes from "prop-types";
import Button from "../components/Button";
import fieldsData from "../data/fieldsData";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const Form = ({ fields, btnText }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
    watch,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    toast.success("Form submitted successfully!");
    console.log(data);
  };

  const onError = (errors) => {
    toast.error("Please fix the errors in the form.");
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <Toaster richColors position="top-right" />

      <div className="mb-8">
        {fields.map((fieldKey) => {
          const field = fieldsData[fieldKey];
          if (!field) {
            console.error(`Field key "${fieldKey}" not found in fieldsData`);
            return null;
          }

          const value = watch(field.name);
          const isFieldValid = value && !errors[field.name];

          return (
            <div key={field.name} className="mb-4 ">
              <label
                htmlFor={field.name}
                className="block text-gray-700 font-bold mb-2"
              >
                {field.label}:
              </label>
              <div className="relative">
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  {...register(field.name, {
                    ...field.validation,
                    validate: field.validation.validate
                      ? (value) => field.validation.validate(value, getValues)
                      : undefined,
                  })}
                  className={` border-2 shadow-md mb-1 w-full p-4 font-medium text-base rounded-md focus-within:outline-gray-800 focus:outline-gray-800 focus-visible:outline-gray-800
                  ${
                    errors[field.name]
                      ? "border-red-500 focus-within:outline-red-500 focus:outline-red-500 focus-visible:outline-red-500"
                      : isFieldValid
                      ? "border-green-500 focus-within:outline-green-500 focus:outline-green-500 focus-visible:outline-green-500 shadow-xl shadow-green-100"
                      : "border-gray-800 focus-within:outline-gray-800 focus:outline-gray-800 focus-visible:outline-gray-800"
                  }`}
                />

                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  {errors[field.name] ? (
                    <FaExclamationCircle className="text-red-500" />
                  ) : isFieldValid ? (
                    <FaCheckCircle className="text-green-500" />
                  ) : null}
                </div>
              </div>

              {errors[field.name] && (
                <p className="text-red-500 text-sm">
                  {errors[field.name].message}
                </p>
              )}
            </div>
          );
        })}
      </div>
      <div className="login-btn">
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Loading ..." : btnText}
        </Button>
      </div>
    </form>
  );
};

Form.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
  btnText: PropTypes.string.isRequired,
};

export default Form;
