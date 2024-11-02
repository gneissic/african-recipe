import { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
const OrderForm = () => {
  const food = useSelector((state) => state.product.nameOfFood);
  const recipe = useSelector((state) => state.product.recipeName);
  const [userName, setUserName] = useState('');
  const [userNameIsTouched, setUserNameIsTouched] = useState(false);
  const userIsValid = userName.trim() !== '';
  const userIsInValid = !userIsValid && userNameIsTouched;
  const [lastName, setLastName] = useState('');
  const [lastNameIsTouched, setLastNameIsTouched] = useState(false);
  const lastNameIsValid = lastName.trim() !== '';
  const lastNameIsInValid = !lastNameIsValid && lastNameIsTouched;
  const [number, setNumber] = useState('');
  const [numberIsTouched, setNumberIsTouched] = useState(false);
  const numberIsValid = number.length > 10;
  const numberIsInvalid = !numberIsValid && numberIsTouched;
  const [address, setAddress] = useState('');
  const [addressIsTouched, setAddressIsTouched] = useState(false);
  const addressIsValid = address.trim() !== '';
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
        'https://african-recipe-e04e8-default-rtdb.firebaseio.com/orderData.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(orderDta),
        },
      );

      if (!response.ok) {
        throw new Error(`Request failed ${response.status} `);
      }
    } catch (error) {}

    setLastName('');
    setUserName('');
    setNumber('');
    setAddress('');
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
    navigate('../');
  };

  const inputClasses =
    'outline-none font-pops w-[80%]  py-2 border rounded pl-2';
  const nameClass = `${inputClasses}  ${
    userIsInValid ? 'bg-amber-200 text-white' : ''
  }`;
  const LastNameClass = `${inputClasses}  ${
    lastNameIsInValid ? 'bg-amber-200 text-white' : ''
  }`;
  const numberClass = `${inputClasses}  ${
    numberIsInvalid ? 'bg-amber-200 text-white' : ''
  }`;
  const addressClass = `${inputClasses}  ${
    addressIsInValid ? 'bg-amber-200 text-white' : ''
  }`;

  return (
    <Fragment>
      <div className="fixed inset-0 bg-black/45"></div>

      <form
        className="absolute left-[50%] top-[50%] grid h-[90%] w-[90vw] max-w-[800px] translate-x-[-50%] translate-y-[-50%] gap-y-3 overflow-y-scroll rounded-md border bg-white py-5 font-pops md:w-[60vw]"
        onSubmit={onSubmitHandler}
      >
        <div className="px-4">
          <h1 className="mx-auto w-fit border-b-[0.4rem] border-dotted border-amber-500 px-3 pb-2 text-[33px] font-bold italic sw400:border-b-[0.7rem] sw400:pb-4 sw400:text-3xl md:text-4xl lg:border-b-[0.9rem] lg:text-5xl">
            African Recipes!
          </h1>
          <div className="py-3 text-lg">
            Hello, you are about to Order {food}, which is
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
              <p className="font-lora text-red-900">
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
              <p className="font-lora text-red-900">
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
              <p className="font-lora text-red-900">
                write correct number please.
              </p>
            )}
          </div>
          <div>
            <p className="pb-[0.5rem] text-sm font-semibold">
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
          <div className="flex items-center justify-around">
            <Link to={'../'}>
              <button
                onClick={hideFormHandler}
                className="ease mt-2 rounded-md bg-red-800 px-4 py-2 font-nun font-semibold text-white transition-all duration-300 hover:bg-green-800"
              >
                Cancel
              </button>
            </Link>

            <button
              disabled={!formIsValid}
              className="ease mt-2 rounded-md bg-red-800 px-4 py-2 font-nun font-semibold text-white transition-all duration-300 hover:bg-green-800 disabled:cursor-not-allowed disabled:bg-gray-600"
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
