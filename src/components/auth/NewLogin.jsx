import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";

const NewLogin = () => {
  const isLoggeIn = useSelector((state) => state.product.loggedIn);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        navigate("/");

        dispatch(authActions.isLoggedIn());
        dispatch(authActions.setUserName(userMail));

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <Fragment>
      <div className=" pt-[4rem] lg:w-[40%] lg:mx-auto">
        <h1 className=" ml-2 text-3xl tracking-wider font-pops font-bold">
          Log In
        </h1>
        <form>
          <div className="grid gap-4 lg:gap-10 pt-7">
            <input
              value={email}
              onChange={changeEmailHandler}
              type="text"
              name="email"
              required
              placeholder="Enter your Email"
              className=" outline-none w-[90%] ml-3 border rounded-md border-black/50 py-2 font-pops pl-2 font-semibold text-black"
            />

            <input
              type="password"
              name="password"
              value={password}
              onChange={changePasswordHandler}
              required
              placeholder="Enter your Password"
              className=" outline-none w-[90%] ml-3 border rounded-md border-black/50 py-2 font-pops pl-2 font-semibold text-black"
            />
          </div>
          <button
            onClick={loginHandler}
            className=" ml-2 py-4 rounded-md text-black font-pops font-semibold tracking-wider border border-slate-700 px-6 mt-7"
          >
            Login
          </button>
          <p className="pt-3 font-pops text-black/70 font-semibold">
            Dont have an account?{" "}
            <span className="text-secondary font-bold font-pops">
              {" "}
              <Link to={"/food/signup"}> Sign Up here </Link>
            </span>{" "}
          </p>
        </form>
      </div>
    </Fragment>
  );
};

export default NewLogin;
