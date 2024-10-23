import { useLoaderData } from "react-router-dom";
import DetailItems from "../components/learn/DetailItems";

const NigeriaDetails = () => {
  const data = useLoaderData();
  return (
    <div>
      <DetailItems data={data} />
    </div>
  );
};

export default NigeriaDetails;
