import { useEffect } from 'react';
import Card from '../ui/Card';
import { useState } from 'react';

const OurCountries = () => {
  const [error, setError] = useState('');
  const [food, setFood] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      const fetchDataHandler = async () => {
        setIsLoading(true);
        const response = await fetch(
          'https://african-recipe-c6fe5-default-rtdb.firebaseio.com/countries.json',
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
    <div className="bg-white px-[12px] pt-[2rem]">
      <h1 className="mx-auto w-fit border-b-[0.4rem] border-dotted border-amber-500 px-3 pb-2 text-[33px] font-bold italic sw400:border-b-[0.7rem] sw400:pb-4 sw400:text-4xl md:text-5xl lg:border-b-[0.9rem] lg:text-6xl">
        Our Countries
      </h1>
      <p className="pt-5 text-center font-pops text-[19px] font-semibold text-slate-600 sw400:text-[23px] lg:text-[27px]">
        We provide different cusines from various countries across Africa. Let
        us dive in!
      </p>
      {isLoading && (
        <p className="mt-[4rem] animate-pulse text-center text-3xl font-semibold text-red-700">
          Loading Countries In A Minute.....
        </p>
      )}
      <div className="mt-[2rem] flex flex-wrap justify-around gap-1">
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
