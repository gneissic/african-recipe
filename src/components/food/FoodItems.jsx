const FoodItems = (props) => {
  return (
    <div className="cursor-pointer">
      <div className="ml-5 p-2 ">
        <p className="text-slate-800 text-xl py-2 font-bold font-pops ml-4">
          {props.name}
        </p>
        <div>
          <img
            src={props.img}
            className=" w-[20rem] h-[20rem]  rounded-md"
            alt=""
          />
        </div>
        <div>
          <p className=" w-[70%] mt-2 py-2 text-lg font-semibold text-gray-700">
            {props.recipe}
          </p>
        </div>
        <div className="flex gap-[3rem] items-center">
          <p className="hover:text-red-700 transition-all duration-100 ease-out underline text-green-700">
            Learn how to make {props.name}
          </p>
          <button className="text-white font-pops font-semibold py-2 px-3 rounded-md bg-red-700">
            Order {props.name}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodItems;
