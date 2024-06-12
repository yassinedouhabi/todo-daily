const fieldsData = {
  firstname: {
    name: 'firstname',
    label: 'First Name',
    type: 'text',
    placeholder: 'Enter Your First Name ...',
    validation: {
      required: 'First name is required',
      minLength: {
        value: 2,
        message: 'First name must be at least 2 characters',
      },
    },
  },
  lastname: {
    name: 'lastname',
    label: 'Last Name',
    type: 'text',
    placeholder: 'Enter Your Last Name ...',
    validation: {
      required: 'Last name is required',
      minLength: {
        value: 2,
        message: 'Last name must be at least 2 characters',
      },
    },
  },
  username: {
    name: 'username',
    label: 'Username',
    type: 'text',
    placeholder: 'Enter Your Username ...',
    validation: {
      required: 'Username is required',
      minLength: {
        value: 4,
        message: 'Username must be at least 4 characters',
      },
    },
  },
  email: {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter Your Email ...',
    validation: {
      required: 'Email is required',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Please enter a valid email address',
      },
    },
  },
  password: {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter Your Password ...',
    validation: {
      required: 'Password is required',
      minLength: {
        value: 6,
        message: 'Password must be at least 6 characters',
      },
    },
  },
  confirmpassword: {
    name: 'confirmpassword',
    label: 'Confirm Password',
    type: 'password',
    placeholder: 'Confirm Your Password ...',
    validation: {
      required: 'Confirm password is required',
      validate: (value, getValues) => {
        if (value !== getValues('password')) {
          return 'Passwords do not match';
        }
        return true;
      },
    },
  },
};

export default fieldsData;
