import { Fragment } from "react";
import ReactDOM from "react-dom";
import { AiFillGoogleCircle } from "react-icons/ai";
import { auth, googleProvider } from "./firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Backdrop = (props) => {
  return (
    <div
      onClick={props.hideModalHandler}
      className="fixed inset-0 bg-black/50 z-40"
    ></div>
  );
};
const ModalOverlay = () => {
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);

        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;

        const userName = result.user.displayName;

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;

        const errorMessage = error.message;

        // The email of the user's account used.
        const email = error.customData.email;
      });
  };
  return (
    <div className="fixed z-40 bg-white left-[30%] top-[20%] border rounded-md w-[50%]">
      <div className="cursor-pointer pb-5">
        <div className="font-nun text-black font-semibold  py-[1rem] border-b border-gray-300 ">
          <h1 className="font-bold text-3xl text-center text-amber-500 font-nun">
            Login or sign up
          </h1>
        </div>
        <div className="py-3 pl-2">
          <h1 className="font-nun text-3xl text-center">
            Welcome to African Recipes
          </h1>
        </div>

        <div className="grid gap-y-5 pb-2 pl-2">
          <div
            onClick={handleGoogleLogin}
            className="flex border-[1.5px] rounded-md border-amber-600 w-[80%] mx-auto gap-[7.4rem] py-1"
          >
            <div>
              <AiFillGoogleCircle className="text-amber-600 h-7 w-7 ml-2" />
            </div>
            <p className="text-black font-nun">Continue with Google</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Login = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop hideModalHandler={props.hideModalHandler} />,
        document.getElementById("overlays")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById("overlays")
      )}
    </Fragment>
  );
};
export default Login;
