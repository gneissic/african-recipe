import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authActions } from "../../store/auth-slice";

const FoodItems = (props) => {
  const isLogedIn = useSelector((state) => state.product.loggedIn);
  const dispatch = useDispatch();

  const setFoodNameHandler = () => {
    dispatch(authActions.foodName(props.name));
    dispatch(authActions.foodRecipe(props.recipe));
  };

  return (
    <div className="cursor-pointer">
      <div className="ml-5 p-2 ">
        <p className="text-slate-800 text-xl py-2 font-bold font-pops ml-4">
          {props.name}
        </p>
        <Link to={props.id}>
          <img
            src={props.img}
            className=" w-[20rem] h-[20rem]  rounded-md"
            alt=""
          />
        </Link>
        <div>
          <p className=" w-[70%] mt-2 py-2 text-lg font-semibold text-gray-700">
            {props.recipe}
          </p>
        </div>
        <div className="flex gap-[3rem] items-center">
          <Link to={props.id}>
            <p className="hover:text-red-700 transition-all duration-100 ease-out underline text-green-700">
              Learn how to make {props.name}
            </p>
          </Link>
          <Link to={`${isLogedIn ? "/food/order" : "/food/login"}`}>
            <button
              onClick={setFoodNameHandler}
              className="text-white font-pops font-semibold py-2 px-3 rounded-md bg-amber-500 hover:bg-red-600 transition-all duration-150 ease-out"
            >
              Order {props.name}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodItems;
