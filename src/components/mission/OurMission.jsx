import Img from "../../assets/landing-img.png";
const OurMission = () => {
  return (
    <div className="bg-white">
      <h1 className=" font-bold text-7xl pt-[2rem] pb-5 mx-auto  italic  border-amber-500 border-b-[1rem] border-dotted  w-[40%]">
        Our Mission
      </h1>
      <div className="flex gap-[5rem] ml-[2rem] mt-[5rem]">
        <img src={Img} className="h-[30rem] rounded-md mr-[3rem] " alt="" />
        <p className="mt-[5rem] text-black  font-nun text-4xl w-[90%]">
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
