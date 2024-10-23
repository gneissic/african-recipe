import { useLoaderData } from "react-router-dom";
import DetailItems from "../components/learn/DetailItems";

const EthiopiaDetails = () => {
  const data = useLoaderData();
  return (
    <div>
      <DetailItems data={data} />
    </div>
  );
};

export default EthiopiaDetails;
