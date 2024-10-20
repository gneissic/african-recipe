import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link to={props.id}>
      {" "}
      <div className="cursor-pointer">
        <div className="ml-5 p-2">
          <div>
            <img
              src={props.img}
              className=" w-[17rem] h-[13rem]  rounded-md"
              alt=""
            />
          </div>
          <div>
            <p>{props.coordinate}</p>
            <p className="text-green-700">{props.country}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
