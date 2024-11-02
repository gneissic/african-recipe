import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { authActions } from '../../store/auth-slice';

const FoodItems = (props) => {
  const isLogedIn = useSelector((state) => state.product.loggedIn);
  const dispatch = useDispatch();

  const setFoodNameHandler = () => {
    dispatch(authActions.foodName(props.name));
    dispatch(authActions.foodRecipe(props.recipe));
  };

  return (
    <div className="flex w-[80vw] max-w-[320px] flex-col">
      <Link to={props.id} className="inline-block grow">
        <img
          src={props.img}
          className="max-h-[20rem] w-[100%] rounded-md"
          alt=""
        />
      </Link>
      <p className="mt-[0.4rem] font-pops text-xl font-bold text-slate-800">
        {props.name}
      </p>
      <div>
        <p className="text-lg font-semibold text-gray-700">{props.recipe}</p>
      </div>
      <div className="mt-[0.4rem] flex items-center gap-[3rem]">
        <Link to={props.id}>
          <p className="text-green-700 underline transition-all duration-100 ease-out hover:text-red-700">
            Learn how to make {props.name}
          </p>
        </Link>
        <Link to={`${isLogedIn ? '/food/order' : '/food/login'}`}>
          <button
            onClick={setFoodNameHandler}
            className="rounded-md bg-amber-500 px-3 py-2 font-pops font-semibold text-white transition-all duration-150 ease-out hover:bg-red-600"
          >
            Order {props.name}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FoodItems;
