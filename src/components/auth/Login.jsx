import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { auth, googleProvider } from './firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Backdrop = (props) => {
  return (
    <div
      onClick={props.hideModalHandler}
      className="fixed inset-0 z-40 bg-black/50"
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
    <div className="fixed left-[30%] top-[20%] z-40 w-[50%] rounded-md border bg-white">
      <div className="cursor-pointer pb-5">
        <div className="border-b border-gray-300 py-[1rem] font-nun font-semibold text-black">
          <h1 className="text-center font-nun text-3xl font-bold text-amber-500">
            Login or sign up
          </h1>
        </div>
        <div className="py-3 pl-2">
          <h1 className="text-center font-nun text-3xl">
            Welcome to African Recipes
          </h1>
        </div>

        <div className="grid gap-y-5 pb-2 pl-2">
          <div
            onClick={handleGoogleLogin}
            className="mx-auto flex w-[80%] gap-[7.4rem] rounded-md border-[1.5px] border-amber-600 py-1"
          >
            <div>
              <AiFillGoogleCircle className="ml-2 h-7 w-7 text-amber-600" />
            </div>
            <p className="font-nun text-black">Continue with Google</p>
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
        document.getElementById('overlays'),
      )}
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById('overlays'),
      )}
    </Fragment>
  );
};
export default Login;
