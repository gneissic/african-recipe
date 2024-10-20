import { useEffect } from "react";
import Card from "../ui/Card";
import { useState } from "react";

const OurCountries = () => {
  const [error, setError] = useState("");
  const [food, setFood] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    try {
      const fetchDataHandler = async () => {
        setIsLoading(true);
        const response = await fetch(
          "https://african-recipe-e04e8-default-rtdb.firebaseio.com/countries.json"
        );
        if (!response.ok) {
          setError(`oppps ${response.status} unable to fetch data!`);
        }
        const data = await response.json();
        const foodData = [];

        for (const key in data) {
          foodData.push({
            country: data[key].country,
            id: data[key].id,
            coordinate: data[key].coordinate,
            img: data[key].img,
          });
        }
        setFood(foodData);
        setIsLoading(false);
      };

      fetchDataHandler();
    } catch (error) {
      setError(error.message);
    }
  }, []);

  return (
    <div className="bg-white pt-[2rem]">
      <h1 className=" font-bold text-7xl pb-5 mx-auto  italic  border-amber-500 border-b-[1rem] border-dotted  w-[40%]">
        Our Countries
      </h1>
      <p className="text-3xl text-center font-pops text-slate-600 font-semibold pt-5">
        We provide different cusines from various countries across Africa. Let
        us dive in!
      </p>
      {isLoading && (
        <p className="text-center mt-[4rem] text-3xl font-semibold text-red-700 animate-pulse">
          Loading Countries In A Minute.....
        </p>
      )}
      <div className="grid  grid-cols-4 mt-[2rem]">
        {food.map((info) => (
          <Card
            key={info.id}
            id={info.id}
            img={info.img}
            country={info.country}
            coordinate={info.coordinate}
          />
        ))}
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default OurCountries;
