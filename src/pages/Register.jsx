import Form from "../components/Form";

const Register = () => {
  const fields = [
    { name: "name", label: "Name", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "password", label: "Password", type: "password" },
  ];

  const validationSchema = {
    username: { required: true },
    email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    password: { required: true, minLength: 6 },
  };

  const handleSubmit = (values) => {
    console.log("Form submitted with values:", values);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 mx-4 rounded-lg border-2 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
        <Form
          fields={fields}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        />
      </div>
    </div>
  );
};

export default Register;
