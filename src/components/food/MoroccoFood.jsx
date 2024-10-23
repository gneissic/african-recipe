import { Fragment, useEffect, useState } from "react";
import FoodItems from "./FoodItems";
import FoodHeader from "./FoodHeader";

const MoroccoFood = () => {
  const [error, setError] = useState();
  const [food, setFood] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    try {
      const fetchDataHandler = async () => {
        setIsLoading(true);
        const response = await fetch(
          "https://african-recipe-e04e8-default-rtdb.firebaseio.com/food/morocco.json"
        );
        if (!response.ok) {
          setError(`oppps ${response.status} unable to fetch data!`);
        } else {
          const data = await response.json();
          const foodData = [];
          for (const key in data) {
            foodData.push({
              country: data[key].country,
              id: data[key].id,
              coordinate: data[key].coordinate,
              img: data[key].img,
              recipe: data[key].recipe,
              name: data[key].name,
            });
          }
          setFood(foodData);
          setIsLoading(false);
        }
      };

      fetchDataHandler();
    } catch (error) {
      setError(error.message);
    }
  }, []);

  return (
    <Fragment>
      <FoodHeader />
      <div className=" flex justify-around">
        {food.map((items) => (
          <FoodItems
            key={items.name}
            name={items.name}
            id={items.id}
            country={items.country}
            img={items.img}
            recipe={items.recipe}
          />
        ))}
      </div>
      {error && <p>{error}</p>}
      {isLoading && (
        <p className="animate-pulse text-center mt-[10rem] text-3xl font-semibold text-slate-700">
          Loading your meals.....
        </p>
      )}
    </Fragment>
  );
};

export default MoroccoFood;
