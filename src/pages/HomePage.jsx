import Contact from "../components/contact/Contact";
import Home from "../components/Home";
import OurMission from "../components/mission/OurMission";
import OurCountries from "../components/OurCountries";

const HomePage = (props) => {
  return (
    <div>
      <Home
        showModal={props.showModal}
        showModalHandler={props.showModalHandler}
        hideModalHandler={props.hideModalHandler}
      />
      <OurCountries />
      <OurMission />
      <Contact />
    </div>
  );
};

export default HomePage;
