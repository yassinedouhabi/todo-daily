import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Logo from '../components/Logo';
import googleIcon from '../assets/google.svg';
import githubIcon from '../assets/github.svg';
import Form from '../components/Form';

function Login() {
  const fields = ['email', 'password'];

  return (
    <div className='flex items-center justify-center min-h-dvh bg-gray-100'>
      <Link to='/'>
        <div className='absolute top-4 left-4 flex items-center gap-2 font-bold text-gray-500 hover:text-gray-800'>
          <IoMdArrowRoundBack />
          <span>Back</span>
        </div>
      </Link>
      <div className='bg-white mx-4 my-20 p-8 rounded-lg border-2 w-full max-w-md'>
        <div className='mb-8'>
          <div className='flex flex-col items-start justify-between'>
            <Logo />
            <h3 className='text-3xl md:text-6xl font-bold text-gray-800 my-2'>
              Login
            </h3>
          </div>
          <p className='text-base font-normal text-gray-500 md:text-xl capitalize'>
            to do your tasks and manage your time
          </p>
        </div>

        <Form fields={fields} btnText='Login' />
        <div className='text-gray-800 mt-4'>
          <Link>Forgotten Password ?</Link>
        </div>

        <div className='relative my-8 text-center text-gray-500'>
          <span className='relative z-10 bg-white px-2 capitalize'>
            or Login with
          </span>
          <div className='absolute inset-0 flex items-center'>
            <div className='w-full border-t border-gray-300'></div>
          </div>
        </div>
        <div className='social-login-buttons mb-8'>
          <div className='google'>
            <div className='bg-gray-50 text-gray-800 border flex items-center justify-center p-3 rounded-md gap-2 cursor-pointer mb-4'>
              <img src={googleIcon} alt='Google' />
              <span>Continue using Google</span>
            </div>
          </div>
          <div className='github'>
            <div className='bg-gray-50 text-gray-800 border flex items-center justify-center p-3 rounded-md gap-2 cursor-pointer'>
              <img src={githubIcon} alt='GitHub' />
              <span>Continue using Github</span>
            </div>
          </div>
        </div>
        <div className='border-t py-4'>
          <span className='text-gray-800'>
            Not have an account?{' '}
            <Link to='/register' className='text-red-500'>
              Sign up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
