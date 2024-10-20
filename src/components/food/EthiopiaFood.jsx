import { Fragment, useEffect, useState } from "react";
import FoodItems from "./FoodItems";
import FoodHeader from "./FoodHeader";

const EthiopiaFood = () => {
  const [error, setError] = useState();
  const [food, setFood] = useState([]);
  useEffect(() => {
    try {
      const fetchDataHandler = async () => {
        const response = await fetch(
          "https://african-recipe-e04e8-default-rtdb.firebaseio.com/food/ethiopia.json"
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
        }
      };

      fetchDataHandler();
    } catch (error) {
      setError(error.message);
      console.log(error);
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
            country={items.country}
            img={items.img}
            recipe={items.recipe}
          />
        ))}
      </div>
      {<p className="bg-red-900">{error}</p>}
    </Fragment>
  );
};

export default EthiopiaFood;
