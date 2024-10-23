import { useLoaderData } from "react-router-dom";
import DetailItems from "../components/learn/DetailItems";

const TanzaniaDetails = () => {
  const data = useLoaderData();
  return (
    <div>
      <DetailItems data={data} />
    </div>
  );
};

export default TanzaniaDetails;
