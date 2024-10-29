import { Fragment, useState } from "react";

import { Form } from "react-router-dom";
import { SlEnvolopeLetter } from "react-icons/sl";
import { AiOutlineWhatsApp, AiOutlineInstagram } from "react-icons/ai";
import { BsTiktok } from "react-icons/bs";

const Contact = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const enterNameHandler = (e) => {
    setName(e.target.value);
  };
  const enterMailHandler = (e) => {
    setMail(e.target.value);
  };
  const enterMessageHandler = (e) => {
    setMessage(e.target.value);
  };

  const onSubmitUserData = async () => {
    const userData = {
      name,
      mail,
      message,
    };
    setIsLoading(true);
    setLoaded(false);
    try {
      const response = await fetch(
        "https://african-recipe-e04e8-default-rtdb.firebaseio.com/userData.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (!response.ok) {
        throw new Error(`Request failed ${response.status} `);
      }

      setIsLoading(false);
      setLoaded(true);
      setError(null);
    } catch (error) {
      setError(`Failed to send message ${error}`);
    }
    setName("");
    setMail("");
    setMessage("");
  };

  let loading;
  let sendMessage;
  if (isLoading) {
    loading = (
      <button className="w-[93%] animate-pulse ml-2 font-pops bg-amber-500 py-3 px-5 text-white font-semibold rounded-md   text-lg">
        Sending your Review
      </button>
    );
  }
  if (!loading && loaded) {
    loading = (
      <button className="w-[93%] ml-2 font-pops bg-amber-500 py-3 px-5 text-white font-semibold rounded-md   text-lg">
        Send Review
      </button>
    );
    sendMessage = (
      <div className="w-[80%] m-auto bg-green-300 mt-[4rem] py-3 px-2 font-semibold">
        <p className="text-center  ">
          Your review has been successfully delivered. We will contact you
          shortly via the mail you provided.
        </p>
      </div>
    );
  }
  if (!loading && !loaded) {
    loading = (
      <button className="w-[93%] ml-2 font-pops bg-amber-500 py-3 px-5 text-white font-semibold rounded-md   text-lg">
        Send Review
      </button>
    );
  }
  if (error) {
    sendMessage = (
      <div className="w-[80%] m-auto bg-red-900 mt-[4rem] py-3 px-2 font-semibold text-white font-pops">
        <p className="text-center  ">{error}</p>
      </div>
    );
    loading = (
      <button className="w-[93%] ml-2 font-pops bg-primary py-3 px-5 text-white font-semibold rounded-md   text-lg">
        Send Review
      </button>
    );
  }

  return (
    <Fragment>
      <div className="bg-white">
        <h1 className=" font-bold text-7xl pt-[4rem] pb-5 mx-auto  italic  border-amber-500 border-b-[1rem] border-dotted  w-[45%]">
          Send A Review
        </h1>
        <div className="lg:w-[80%] lg:mx-auto">
          {sendMessage}
          <h1 className="pt-[3rem] text-3xl lg:text-4xl  lg:ml-[6rem] tracking-wider font-bold font-pops pl-2">
            Send Us A Review
          </h1>
          <div className="lg:flex lg:justify-center lg:gap-[2rem]">
            <div className="pt-[2rem]">
              <Form onSubmit={onSubmitUserData}>
                <div className="grid gap-6">
                  <div className="lg:flex">
                    <input
                      onChange={enterNameHandler}
                      value={name}
                      type="text"
                      name="user-name"
                      required
                      placeholder="Enter your Name"
                      className=" outline-none w-[90%] lg:w-full ml-3 border rounded-md border-black/50 py-2 font-pops pl-2 font-semibold text-black"
                    />
                    <input
                      onChange={enterMailHandler}
                      value={mail}
                      type="email"
                      name="user-mail"
                      required
                      placeholder="Enter your Email address"
                      className=" outline-none w-[90%]  lg:w-full ml-3 border rounded-md border-black/50 py-2 font-pops pl-2 font-semibold text-black"
                    />
                  </div>

                  <textarea
                    onChange={enterMessageHandler}
                    value={message}
                    required
                    placeholder="Write your review..."
                    name="user-message"
                    id=""
                    cols="30"
                    rows="5"
                    className="outline-none w-[90%] lg:w-full ml-3 border rounded-md border-black/50 py-2 font-pops pl-2 font-semibold text-black"
                  ></textarea>
                </div>
                <div className="pt-[0.5rem]">{loading}</div>
              </Form>
            </div>
            <div className="font-pops text-black">
              <div className="border border-black/40 rounded-md h-inherit pl-2 py-4 w-[90%] m-auto mt-[2rem]">
                <h1 className="text-2xl m-auto  border-b border-gray-400 pb-3 w-[85%] font-bold text-black/90">
                  Our Contact Information
                </h1>
                <div className="grid gap-3 pt-3">
                  <p className="text-2xl font-semibold text-black/90 pl-2 pb-2">
                    Contact Info
                  </p>
                  <div className="flex items-center gap-3">
                    <SlEnvolopeLetter className="text-secondary" />
                    <p>OkenwaDaniel@gmail.com</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <AiOutlineWhatsApp className="text-secondary" />
                    <p>+37063883672</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <BsTiktok className="text-secondary" />
                    <p>Follow on TikTok</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <AiOutlineInstagram className="text-secondary" />
                    <p>Follow on Instagram</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
