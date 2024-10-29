import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
const OrderForm = () => {
  const food = useSelector((state) => state.product.nameOfFood);
  const recipe = useSelector((state) => state.product.recipeName);
  const [userName, setUserName] = useState("");
  const [userNameIsTouched, setUserNameIsTouched] = useState(false);
  const userIsValid = userName.trim() !== "";
  const userIsInValid = !userIsValid && userNameIsTouched;
  const [lastName, setLastName] = useState("");
  const [lastNameIsTouched, setLastNameIsTouched] = useState(false);
  const lastNameIsValid = lastName.trim() !== "";
  const lastNameIsInValid = !lastNameIsValid && lastNameIsTouched;
  const [number, setNumber] = useState("");
  const [numberIsTouched, setNumberIsTouched] = useState(false);
  const numberIsValid = number.length > 10;
  const numberIsInvalid = !numberIsValid && numberIsTouched;
  const [address, setAddress] = useState("");
  const [addressIsTouched, setAddressIsTouched] = useState(false);
  const addressIsValid = address.trim() !== "";
  const addressIsInValid = !addressIsValid && addressIsTouched;
  const formIsValid =
    userIsValid && lastNameIsValid && numberIsValid && addressIsValid;

  const onChangeUserHandler = (e) => {
    setUserName(e.target.value);
  };
  const onBlurNameHandler = () => {
    setUserNameIsTouched(true);
  };

  const onChangeLastHandler = (e) => {
    setLastName(e.target.value);
  };
  const onBlurLastHandler = () => {
    setLastNameIsTouched(true);
  };
  const onChangeNumber = (e) => {
    setNumber(e.target.value);
  };
  const onBlurNumberHandler = () => {
    setNumberIsTouched(true);
  };
  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const orderDta = {
      userName,
      lastName,
      address,
      number,
    };

    try {
      const response = await fetch(
        "https://african-recipe-e04e8-default-rtdb.firebaseio.com/orderData.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderDta),
        }
      );

      if (!response.ok) {
        throw new Error(`Request failed ${response.status} `);
      }
    } catch (error) {}

    setLastName("");
    setUserName("");
    setNumber("");
    setAddress("");
    setLastNameIsTouched(false);
    setUserNameIsTouched(false);
    setAddressIsTouched(false);
    setNumberIsTouched(false);
    if (!formIsValid) {
      return;
    }
  };
  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  };
  const onBlurAddress = () => {
    setAddressIsTouched(true);
  };
  const navigate = useNavigate();
  const hideFormHandler = (e) => {
    e.preventDefault();
    navigate("../");
  };

  const inputClasses =
    "outline-none font-pops w-[80%]  py-2 border rounded pl-2";
  const nameClass = `${inputClasses}  ${
    userIsInValid ? "bg-amber-200 text-white" : ""
  }`;
  const LastNameClass = `${inputClasses}  ${
    lastNameIsInValid ? "bg-amber-200 text-white" : ""
  }`;
  const numberClass = `${inputClasses}  ${
    numberIsInvalid ? "bg-amber-200 text-white" : ""
  }`;
  const addressClass = `${inputClasses}  ${
    addressIsInValid ? "bg-amber-200 text-white" : ""
  }`;

  return (
    <Fragment>
      <div className="fixed inset-0 bg-black/45 "></div>

      <form
        className="border  w-[45rem] hidden md:fixed left-[23%] overflow-y-scroll h-[90%] top-2 bg-white py-5 rounded-md md:grid gap-y-3 pl-[2.5rem] font-pops "
        onSubmit={onSubmitHandler}
      >
        <div className="">
          <h1 className=" font-bold text-4xl pb-5 mx-auto  italic  border-amber-500 border-b-[1rem] border-dotted w-[60%] mb-3">
            African Recipes!
          </h1>
          <div className="text-lg py-3">
            Hello, you are about to Order {food}, which is{" "}
            <span className="font-semibold text-slate-700">{recipe}</span> .
            Fill the form below to confirm your order
          </div>
          <div>
            <label htmlFor="Surname"> Surname:</label>
            <br />
            <input
              onChange={onChangeUserHandler}
              onBlur={onBlurNameHandler}
              type="text"
              value={userName}
              placeholder="Enter Surname"
              className={nameClass}
            />
            {userIsInValid && (
              <p className="text-red-900 font-lora">
                please enter a valid surname.
              </p>
            )}
          </div>
          <div>
            <label htmlFor="Lastame">Last name:</label>
            <br />
            <input
              value={lastName}
              onBlur={onBlurLastHandler}
              onChange={onChangeLastHandler}
              type="text"
              placeholder="Enter Lastname"
              className={LastNameClass}
            />
            {lastNameIsInValid && (
              <p className="text-red-900 font-lora">
                please enter a valid last name.
              </p>
            )}
          </div>
          <div>
            <label htmlFor="Postal Code">Whatsapp Number:</label>
            <br />
            <input
              onChange={onChangeNumber}
              onBlur={onBlurNumberHandler}
              value={number}
              type="tel"
              className={numberClass}
            />
            {numberIsInvalid && (
              <p className="text-red-900 font-lora">
                write correct number please.
              </p>
            )}
          </div>
          <div>
            <p className="text-sm pb-[0.5rem] font-semibold">
              Delivery address
            </p>
            <input
              value={address}
              onBlur={onBlurAddress}
              onChange={onChangeAddress}
              type="address"
              placeholder="Enter Address"
              className={addressClass}
            />
            {addressIsInValid && (
              <p className="text-red-900">please enter a valid address</p>
            )}
          </div>
          <div className="flex justify-around items-center">
            <Link to={"../"}>
              <button
                onClick={hideFormHandler}
                className="bg-red-800 py-2 px-4 mt-2 font-nun text-white font-semibold rounded-md hover:bg-green-800 transition-all ease duration-300 "
              >
                Cancel
              </button>
            </Link>

            <button
              disabled={!formIsValid}
              className="bg-red-800 py-2 px-4 mt-2 font-nun text-white font-semibold rounded-md hover:bg-green-800 transition-all ease duration-300  disabled:bg-gray-600 disabled:cursor-not-allowed"
            >
              Confirm
            </button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default OrderForm;
