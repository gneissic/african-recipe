import { Link } from "react-router-dom";
import FoodHeader from "../food/FoodHeader";
const DetailItems = ({ data }) => {
  return (
    <div>
      <FoodHeader />
      <div className="grid place-items-center ">
        <img
          className="w-[25rem] h-[25rem] mt-5 rounded-md"
          src={data.img}
          alt=""
        />
        <p className="text-2xl font-semibold text-slate-700 font-pops">
          {data.name}
        </p>
        <p className="font-semibold text-md font-nun">{data.recipe}</p>
      </div>
      <div className="flex gap-[2rem] ml-[4rem] mt-[3rem] items-center text-2xl justify-between">
        <div className="border-r-2 pr-4 border-amber-500">
          <h1 className=" font-bold text-4xl pb-5 mx-auto  italic  border-amber-500 border-b-[1rem] border-dotted  w-[50%]">
            {" "}
            Ingredients
          </h1>
          <p className="text-slate-700 font-semibold font-nun mt-4">
            {data.ingredients}
          </p>
        </div>
        <div>
          <h1 className=" font-bold text-4xl pb-5 mx-auto  italic  border-amber-500 border-b-[1rem] border-dotted  w-[10%]">
            {" "}
            Steps
          </h1>
          <p className="text-slate-700 font-semibold font-nun mt-4">
            {data.steps}
          </p>
        </div>
      </div>
      <Link to={"../"} className="flex justify-end mr-[3rem]">
        <button className=" bg-amber-500 text-white font-pops font-semibold py-3 px-5 rounded-md my-2 ml-3 hover:bg-red-500 transition-all duration-150 ease-in">
          Go back
        </button>
      </Link>
    </div>
  );
};

export default DetailItems;
