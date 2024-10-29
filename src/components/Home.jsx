import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Svgs from "../assets/Svgs/Svgs";
import img from "../assets/bg-img.avif";
import Login from "./auth/Login";
import { useSelector } from "react-redux";

const Home = (props) => {
  const loggedIn = useSelector((state) => state.product.loggedIn);
  const userName = useSelector((state) => state.product.userName);

  return (
    <div>
      {props.showModal && <Login hideModalHandler={props.hideModalHandler} />}
      {/* <div className="fixed bg-black/20 inset-0 z-10"></div> */}
      <div className="h-[100vh]">
        <div>
          <img className="fixed -z-20 w-[100vw] h-[100vh]  " src={img} alt="" />
          <div className="fixed inset-0 -z-10 bg-black/60"></div>
        </div>
        <div className="h-[7rem] flex items-center justify-between">
          <img src={Logo} alt="logo" className="h-[9rem]" />
          <Svgs />
          {loggedIn && (
            <div className="flex gap-[1rem] text-lg text-amber-500 font-pops">
              <p>Welcome,</p>
              <p>{userName}</p>
            </div>
          )}
          <div>
            {/* <button
              onClick={props.showModalHandler}
              className="font-poppins border rounded-md text-white font-semibold mr-[3rem] text-xl py-3 px-[1.5rem] hover:text-amber-500 bg-amber-500 border-amber-500 hover:bg-white transition-all duration-200 ease-in-out"
            >
              Login
            </button> */}
            {!loggedIn && (
              <div className="hidden lg:flex lg:pr-5 lg:gap-3 ">
                <Link to={"/food/login"}>
                  {" "}
                  <button className="ml-2 bg-primary py-4 px-6 rounded-md text-white shadow">
                    Login
                  </button>
                </Link>
                <Link to={"/food/signUp"}>
                  <button className="ml-3 bg-[#ccccff] py-4 px-6 rounded-md">
                    Register
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="flex items-center justify-around">
            <div>
              <p className=" grid font-pops text-white text-[2rem] w-[95%]  text-center mt-[5rem] tracking-wide">
                {" "}
                <span className="font-bold font-lato text-amber-500 text-[4rem]">
                  {" "}
                  Welcome to African Recipes!{" "}
                </span>{" "}
                Discover the Rich Tapestry of African Cuisine! Explore a vibrant
                world of bold flavors, traditional recipes, and authentic dishes
                from different corners of Africa.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
