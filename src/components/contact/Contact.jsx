import { Fragment, useState } from 'react';

import { Form } from 'react-router-dom';
import { SlEnvolopeLetter } from 'react-icons/sl';
import { AiOutlineWhatsApp, AiOutlineInstagram } from 'react-icons/ai';
import { BsTiktok } from 'react-icons/bs';

const Contact = () => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');
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
        'https://african-recipe-c6fe5-default-rtdb.firebaseio.com/userData.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        },
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
    setName('');
    setMail('');
    setMessage('');
  };

  let loading;
  let sendMessage;
  if (isLoading) {
    loading = (
      <button className="mx-auto ml-2 w-[93%] animate-pulse rounded-md bg-amber-500 px-5 py-3 font-pops text-lg font-semibold text-white">
        Sending your Review
      </button>
    );
  }
  if (!loading && loaded) {
    loading = (
      <button className="mx-auto w-[93%] rounded-md bg-amber-500 px-5 py-3 font-pops text-lg font-semibold text-white">
        Send Review
      </button>
    );
    sendMessage = (
      <div className="m-auto mt-[4rem] w-[80%] bg-green-300 px-2 py-3 font-semibold">
        <p className="text-center">
          Your review has been successfully delivered. We will contact you
          shortly via the mail you provided.
        </p>
      </div>
    );
  }
  if (!loading && !loaded) {
    loading = (
      <button className="mx-auto w-[93%] rounded-md bg-amber-500 px-5 py-3 font-pops text-lg font-semibold text-white">
        Send Review
      </button>
    );
  }
  if (error) {
    sendMessage = (
      <div className="m-auto mt-[4rem] w-[80%] bg-red-900 px-2 py-3 font-pops font-semibold text-white">
        <p className="text-center">{error}</p>
      </div>
    );
    loading = (
      <button className="bg-primary mx-auto w-[93%] rounded-md px-5 py-3 font-pops text-lg font-semibold text-white">
        Send Review
      </button>
    );
  }

  return (
    <Fragment>
      <div className="bg-white px-[12px] pb-[3rem] pt-[2rem]">
        <h1 className="mx-auto w-fit border-b-[0.4rem] border-dotted border-amber-500 px-3 pb-2 text-[33px] font-bold italic sw400:border-b-[0.7rem] sw400:pb-4 sw400:text-4xl md:text-5xl lg:border-b-[0.9rem] lg:text-6xl">
          Send A Review
        </h1>
        <div className="lg:mx-auto lg:w-[80%]">
          {sendMessage}
          <h1 className="pl-2 pt-[3rem] font-pops text-3xl font-bold tracking-wider lg:ml-[6rem] lg:text-4xl">
            Send Us A Review
          </h1>
          <div className="lg:flex lg:justify-center lg:gap-[2rem]">
            <div className="pt-[2rem]">
              <Form onSubmit={onSubmitUserData}>
                <div className="flex flex-col items-center gap-6">
                  <div className="flex w-[100%] flex-col gap-[10px] lg:flex-row">
                    <input
                      onChange={enterNameHandler}
                      value={name}
                      type="text"
                      name="user-name"
                      required
                      placeholder="Enter your Name"
                      className="mx-auto w-[90%] rounded-md border border-black/50 py-2 pl-2 font-pops font-semibold text-black outline-none lg:w-full"
                    />
                    <input
                      onChange={enterMailHandler}
                      value={mail}
                      type="email"
                      name="user-mail"
                      required
                      placeholder="Enter your Email address"
                      className="mx-auto w-[90%] rounded-md border border-black/50 py-2 pl-2 font-pops font-semibold text-black outline-none lg:w-full"
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
                    className="mx-auto w-[90%] rounded-md border border-black/50 py-2 pl-2 font-pops font-semibold text-black outline-none lg:w-full"
                  ></textarea>
                </div>
                <div className="flex justify-center pt-[0.5rem]">{loading}</div>
              </Form>
            </div>
            <div className="font-pops text-black">
              <div className="h-inherit m-auto mt-[2rem] w-[90%] rounded-md border border-black/40 py-4 pl-2">
                <h1 className="m-auto w-[85%] border-b border-gray-400 pb-3 text-2xl font-bold text-black/90">
                  Our Contact Information
                </h1>
                <div className="grid gap-3 pt-3">
                  <p className="pb-2 pl-2 text-2xl font-semibold text-black/90">
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
