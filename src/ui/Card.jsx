import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <Link to={props.id}>
      {' '}
      <div className="cursor-pointer">
        <div className="p-2">
          <div>
            <img
              src={props.img}
              className="h-[13rem] w-[17rem] rounded-md"
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
