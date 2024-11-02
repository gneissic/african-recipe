import { Link } from 'react-router-dom';
import FoodHeader from '../food/FoodHeader';
const DetailItems = ({ data }) => {
  return (
    <div>
      <FoodHeader />
      <div className="mx-auto grid w-[85vw] max-w-[25rem]">
        <img
          className="h-[25rem] max-h-[85vw] w-[100%] rounded-md"
          src={data.img}
          alt=""
        />
        <p className="font-pops text-[2rem] font-semibold text-slate-700">
          {data.name}
        </p>
        <p className="font-nun text-[18px] font-semibold">{data.recipe}</p>
      </div>
      <div className="mx-auto mt-[3rem] flex max-w-[85vw] flex-col items-center justify-between gap-[2rem] text-xl lg:flex-row lg:text-2xl">
        <div className="pr-4 lg:border-r-2 lg:border-amber-500">
          <h1 className="mx-auto w-fit border-b-[0.5rem] border-dotted border-amber-500 pb-5 text-2xl font-bold italic lg:border-b-[.8rem] lg:text-4xl">
            {' '}
            Ingredients
          </h1>
          <p className="mt-4 font-nun font-semibold text-slate-700">
            {data.ingredients}
          </p>
        </div>
        <div>
          <h1 className="mx-auto w-fit border-b-[0.5rem] border-dotted border-amber-500 pb-5 text-2xl font-bold italic lg:border-b-[.8rem] lg:text-4xl">
            {' '}
            Steps
          </h1>
          <p className="mt-4 font-nun font-semibold text-slate-700">
            {data.steps}
          </p>
        </div>
      </div>
      <Link to={'../'} className="mr-[3rem] flex justify-end">
        <button className="my-5 ml-3 rounded-md bg-amber-500 px-5 py-3 font-pops font-semibold text-white transition-all duration-150 ease-in hover:bg-red-500">
          Go back
        </button>
      </Link>
    </div>
  );
};

export default DetailItems;
