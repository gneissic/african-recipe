import Img from '../../assets/landing-img.png';
const OurMission = () => {
  return (
    <div className="bg-white px-[12px] pb-[3rem] pt-[2rem]">
      <h1 className="mx-auto w-fit border-b-[0.4rem] border-dotted border-amber-500 px-3 pb-2 text-[33px] font-bold italic sw400:border-b-[0.7rem] sw400:pb-4 sw400:text-4xl md:text-5xl lg:border-b-[0.9rem] lg:text-6xl">
        Our Mission
      </h1>
      <div className="sw1200:flex-row mx-auto mt-[2.5rem] flex flex-col items-center gap-[2rem] sm:mt-[4rem] sm:max-w-[80%] md:gap-[5rem]">
        <img
          src={Img}
          className="h-auto max-w-[80vw] rounded-md sm:h-[30rem]"
          alt=""
        />
        <p className="max-w-[80%] font-nun text-2xl text-black sw500:text-3xl sm:max-w-[100%] sm:text-4xl">
          Our mission is to help small food businesses share their cooking
          skills, teach people how to make their special dishes, and offer a way
          to order these dishes directly. This allows customers to enjoy real,
          homemade meals while supporting local food makers.
        </p>
      </div>
    </div>
  );
};

export default OurMission;
