import { Fragment, useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import { auth } from "./firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fullName, setFullName] = useState();
  const [number, setNumber] = useState();
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
        const user = userCredential.user;

        navigate("/food/login");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        // ..
      });
  }

  return (
    <Fragment>
      <div className=" pt-[4rem] ">
        <h1 className=" lg:w-[70%]  lg:mx-auto ml-2 text-3xl lg:w-4xl tracking-wider font-pops font-bold">
          Sign Up
        </h1>
        <Form>
          <div className="grid  lg:grid-cols-2 lg:w-[70%]  lg:mx-auto gap-4 pt-7 cursor-pointer">
            <input
              type="text"
              name="fullname"
              value={fullName}
              onChange={changeFullNameHandler}
              required
              placeholder="Enter your Full Name"
              className=" outline-none w-[90%] ml-3 border rounded-md border-black/50 py-2 font-pops pl-2 font-semibold text-black"
            />
            <input
              type="email"
              name="mail"
              value={email}
              autoComplete="username"
              onChange={changeEmailHandler}
              required
              placeholder="Enter your email address"
              className=" outline-none w-[90%] ml-3 border rounded-md border-black/50 py-2 font-pops pl-2 font-semibold text-black"
            />
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              onChange={changePasswordHandler}
              value={password}
              required
              placeholder="Enter your Password"
              className=" outline-none w-[90%] ml-3 border rounded-md border-black/50 py-2 font-pops pl-2 font-semibold text-black"
            />
            <input
              type="number"
              name="number"
              value={number}
              onChange={changeNumberHandler}
              required
              placeholder="Enter your Phone Number"
              className=" outline-none w-[90%] ml-3 border rounded-md border-black/50 py-2  font-pops pl-2 font-semibold text-black"
            />
            <div>
              <p className="pl-2 pb-2 text-black font-semibold">Referred By:</p>
              <input
                type="text"
                name="refer"
                placeholder="Optional"
                className=" outline-none w-[90%] ml-3 border rounded-md border-black/50 py-2 font-pops pl-2 font-semibold text-black"
              />
            </div>
          </div>
          <div className="lg:w-[70%]  lg:mx-auto ">
            <button
              onClick={signupHandler}
              disabled={!formIsValid}
              className="disabled:cursor-not-allowed  ml-2 py-4 rounded-md text-black font-pops font-semibold tracking-wider bg-white border border-slate-700 px-6 mt-7"
            >
              Signup
            </button>
            <p className="pt-3 font-pops text-black/70 font-semibold">
              Already have an account?{" "}
              <span className="text-secondary font-bold font-pops">
                {" "}
                <Link to={"/food/login"}> Login here </Link>
              </span>{" "}
            </p>
          </div>
        </Form>
      </div>
    </Fragment>
  );
};

export default Signup;
