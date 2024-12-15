import { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/auth-slice';

const NewLogin = () => {
  const isLoggedIn = useSelector((state) => state.product.loggedIn);
  localStorage.setItem('isLoggedIn', isLoggedIn);
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const changeEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const changePasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const loginHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user.email;
        const userMail = user.slice(0, -10);
        navigate('/');

        dispatch(authActions.isLoggedIn());
        dispatch(authActions.setUserName(userMail));
        localStorage.setItem('username', userMail);

        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <Fragment>
      <div className="pt-[4rem] lg:mx-auto lg:w-[40%]">
        <h1 className="ml-2 font-pops text-3xl font-bold tracking-wider">
          Log In
        </h1>
        <form>
          <div className="grid gap-4 pt-7 lg:gap-10">
            <input
              value={email}
              onChange={changeEmailHandler}
              type="text"
              name="email"
              required
              placeholder="Enter your Email"
              className="ml-3 w-[90%] rounded-md border border-black/50 py-2 pl-2 font-pops font-semibold text-black outline-none"
            />

            <input
              type="password"
              name="password"
              value={password}
              onChange={changePasswordHandler}
              required
              placeholder="Enter your Password"
              className="ml-3 w-[90%] rounded-md border border-black/50 py-2 pl-2 font-pops font-semibold text-black outline-none"
            />
          </div>
          {error && (
            <p className="mt-3 text-center font-pops font-semibold text-red-500">
              {error}
            </p>
          )}
          <button
            onClick={loginHandler}
            className="ml-2 mt-7 rounded-md border border-slate-700 px-6 py-4 font-pops font-semibold tracking-wider text-black"
          >
            Login
          </button>
          <p className="pt-3 font-pops font-semibold text-black/70">
            Dont have an account?{' '}
            <span className="text-secondary font-pops font-bold">
              {' '}
              <Link to={'/food/signup'}> Sign Up here </Link>
            </span>{' '}
          </p>
        </form>
      </div>
    </Fragment>
  );
};

export default NewLogin;
