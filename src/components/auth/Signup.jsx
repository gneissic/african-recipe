import { Fragment, useState } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';
import { auth } from './firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fullName, setFullName] = useState();
  const [number, setNumber] = useState();
  const [error, setError] = useState('');
  const formIsValid = password && email && fullName && number;
  const changeEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const changePasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const changeFullNameHandler = (e) => {
    setFullName(e.target.value);
  };
  const changeNumberHandler = (e) => {
    setNumber(e.target.value);
  };
  function signupHandler() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        userCredential.user;

        navigate('/food/login');

        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);

        // ..
      });
  }

  return (
    <Fragment>
      <div className="pt-[4rem]">
        <h1 className="lg:w-4xl ml-2 font-pops text-3xl font-bold tracking-wider lg:mx-auto lg:w-[70%]">
          Sign Up
        </h1>
        <Form>
          <div className="grid cursor-pointer gap-4 pt-7 lg:mx-auto lg:w-[70%] lg:grid-cols-2">
            <input
              type="text"
              name="fullname"
              value={fullName}
              onChange={changeFullNameHandler}
              required
              placeholder="Enter your Full Name"
              className="ml-3 w-[90%] rounded-md border border-black/50 py-2 pl-2 font-pops font-semibold text-black outline-none"
            />
            <input
              type="email"
              name="mail"
              value={email}
              autoComplete="username"
              onChange={changeEmailHandler}
              required
              placeholder="Enter your email address"
              className="ml-3 w-[90%] rounded-md border border-black/50 py-2 pl-2 font-pops font-semibold text-black outline-none"
            />
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              onChange={changePasswordHandler}
              value={password}
              required
              placeholder="Enter your Password"
              className="ml-3 w-[90%] rounded-md border border-black/50 py-2 pl-2 font-pops font-semibold text-black outline-none"
            />
            <input
              type="number"
              name="number"
              value={number}
              onChange={changeNumberHandler}
              required
              placeholder="Enter your Phone Number"
              className="ml-3 w-[90%] rounded-md border border-black/50 py-2 pl-2 font-pops font-semibold text-black outline-none"
            />
            <div>
              <p className="pb-2 pl-2 font-semibold text-black">Referred By:</p>
              <input
                type="text"
                name="refer"
                placeholder="Optional"
                className="ml-3 w-[90%] rounded-md border border-black/50 py-2 pl-2 font-pops font-semibold text-black outline-none"
              />
            </div>
          </div>
          <div></div>

          {error && (
            <p className="mt-5 text-center font-pops text-red-600">{error}</p>
          )}
          <div className="lg:mx-auto lg:w-[70%]">
            <button
              onClick={signupHandler}
              disabled={!formIsValid}
              className="ml-2 mt-7 rounded-md border border-slate-700 bg-white px-6 py-4 font-pops font-semibold tracking-wider text-black disabled:cursor-not-allowed"
            >
              Signup
            </button>
            <p className="pt-3 font-pops font-semibold text-black/70">
              Already have an account?{' '}
              <span className="text-secondary font-pops font-bold">
                {' '}
                <Link to={'/food/login'}> Login here </Link>
              </span>{' '}
            </p>
          </div>
        </Form>
      </div>
    </Fragment>
  );
};

export default Signup;
