import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import Login from './auth/Login';
import { auth } from './auth/firebaseConfig';
import { signOut } from 'firebase/auth';

const Home = (props) => {
  const loggedIn = localStorage.getItem('isLoggedIn');
  const userName = localStorage.getItem('username');
  const navigate = useNavigate();
  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear();
        navigate('/');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      {props.showModal && <Login hideModalHandler={props.hideModalHandler} />}
      {/* <div className="fixed bg-black/20 inset-0 z-10"></div> */}
      <div className="h-[100vh]">
        <div>
          <div className="hero-bg-img fixed -z-20 h-[100vh] w-[100vw] bg-cover bg-center"></div>
          {/* <img className="fixed -z-20 w-[100vw] h-[100vh]  " src={img} alt="" /> */}
          <div className="fixed inset-0 -z-10 bg-black/60"></div>
        </div>
        <div className="flex h-[7rem] items-center justify-between gap-3">
          <img
            src={Logo}
            alt="logo"
            className="h-[6rem] md:h-[7rem] lg:h-[8rem]"
          />
          {loggedIn && (
            <p className="md:text-md hidden font-pops text-2xl font-semibold text-amber-500 lg:block">
              Welcome, {userName}
            </p>
          )}
          {loggedIn && (
            <div className="flex">
              <button
                onClick={signOutHandler}
                className="mr-10 rounded-md bg-[#ccccff] px-2.5 py-1.5 md:mr-3 md:px-4 md:py-2.5 lg:px-6 lg:py-4"
              >
                Log out
              </button>
            </div>
          )}
          {!loggedIn && (
            <div>
              {/* <button
              onClick={props.showModalHandler}
              className="font-poppins border rounded-md text-white font-semibold mr-[3rem] text-xl py-3 px-[1.5rem] hover:text-amber-500 bg-amber-500 border-amber-500 hover:bg-white transition-all duration-200 ease-in-out"
            >
              Login
            </button> */}

              <div className="flex items-center gap-3 pr-5">
                <Link to={'/food/login'}>
                  <button className="bg-primary ml-2 rounded-md px-2.5 py-1.5 text-white shadow md:px-4 md:py-2.5 lg:px-6 lg:py-4">
                    Login
                  </button>
                </Link>
                <Link to={'/food/signUp'}>
                  <button className="ml-3 rounded-md bg-[#ccccff] px-2.5 py-1.5 md:px-4 md:py-2.5 lg:px-6 lg:py-4">
                    Register
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div>
          <div className="flex items-center justify-around px-3">
            {/* <div> */}
            <p className="mt-[2rem] grid w-[95%] font-pops text-[1.3rem] tracking-wide text-white sw400:mt-[3rem] sw400:text-center sw400:text-[1.5rem] sm:text-[1.7rem] md:mt-[4rem] md:text-[2rem]">
              <span className="font-lato text-[2.8rem] font-bold text-amber-500 sw400:text-[3rem] sm:text-[3.5rem] md:text-[4rem]">
                Welcome to African Recipes!
              </span>
              <span className="pt-5 sw400:pt-1">
                Discover the Rich Tapestry of African Cuisine! Explore a vibrant
                world of bold flavors, traditional recipes, and authentic dishes
                from different corners of Africa.
              </span>
            </p>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
