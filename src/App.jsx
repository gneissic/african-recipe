import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import GhanaFoodPage from "./pages/GhanaFoodPage";
import NigeriaFoodPage from "./pages/NigeriaFoodPage";
import ZimbabweFoodPage from "./pages/ZimbabweFoodPage";
import BotswanaFoodPage from "./pages/BotswanaFoodPage";
import EthiopiaFoodPage from "./pages/EthiopiaFoodPage";
import MoroccoFoodPage from "./pages/MoroccoFoodPage";
import TanzaniaFoodPage from "./pages/TanzaniaFoodPage";
import TunisiaFoodPage from "./pages/TunisiaFoodPage";
import BotswanaFoodDetails from "./pages/BotswanaFoodDetails";
import { loader as botswanaLoader } from "./pages/botswana-loader";
import EthiopiaDetails from "./pages/EthiopiaDetails";
import { loader as ethiopiaLoader } from "./pages/ethiopia-loader";
import GhanaFoodDetails from "./pages/GhanaFoodDetails";
import { loader as ghanaLoader } from "./pages/ghana-loader";
import MorrocoDetails from "./pages/MorrocoDetails";
import { loader as moroccoLoader } from "./pages/morocco-loader";
import NigeriaDetails from "./pages/NigeriaDetails";
import { loader as nigeriaLoader } from "./pages/nigeria-loader";
import TanzaniaDetails from "./pages/TanzaniaDetails";
import { loader as tanzaniaLoader } from "./pages/tanzania-loader";
import TunisiaDetails from "./pages/TunisiaDetails";
import { loader as tunisiaLoader } from "./pages/tunisia-loader";
import { loader as zimbabweLoader } from "./pages/zimbabwe-loader";
import ZimbabweDetails from "./pages/ZimbabweDetails";
import { useEffect, useState } from "react";
import OrderPage from "./pages/OrderPage";
import { Provider } from "react-redux";
import reduxStore from "./store";
import Signup from "./components/auth/SignUp";
import NewLogin from "./components/auth/NewLogin";

function App() {
  const { pathname } = location;
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };
  const hideModalHandler = () => {
    setShowModal(false);
  };

  useEffect(() => {
    scrollTo(0, 0);
  }, [pathname]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <HomePage
          showModal={showModal}
          hideModalHandler={hideModalHandler}
          showModalHandler={showModalHandler}
        />
      ),
    },
    { path: "pages/ghana", element: <GhanaFoodPage /> },
    {
      path: "pages/ghana/:ghanaDetail",
      element: <GhanaFoodDetails />,
      loader: ghanaLoader,
    },
    {
      path: "pages/nigeria",
      element: <NigeriaFoodPage />,
    },
    {
      path: "pages/nigeria/:nigeriaDetail",
      element: <NigeriaDetails />,
      loader: nigeriaLoader,
    },
    { path: "pages/zimbabwe", element: <ZimbabweFoodPage /> },
    {
      path: "pages/zimbabwe/:zimbabweDetail",
      element: <ZimbabweDetails />,
      loader: zimbabweLoader,
    },
    { path: "pages/ethiopia", element: <EthiopiaFoodPage /> },

    {
      path: "pages/ethiopia/:ethiopiaDetail",
      element: <EthiopiaDetails />,
      loader: ethiopiaLoader,
    },
    { path: "pages/morocco", element: <MoroccoFoodPage /> },
    {
      path: "pages/morocco/:moroccoDetail",
      element: <MorrocoDetails />,
      loader: moroccoLoader,
    },
    { path: "pages/tanzania", element: <TanzaniaFoodPage /> },
    {
      path: "pages/tanzania/:tanzaniaDetail",
      element: <TanzaniaDetails />,
      loader: tanzaniaLoader,
    },
    { path: "pages/tunisia", element: <TunisiaFoodPage /> },
    {
      path: "pages/tunisia/:tunisiaDetail",
      element: <TunisiaDetails />,
      loader: tunisiaLoader,
    },
    {
      path: "pages/botswana",
      element: <BotswanaFoodPage />,
    },
    {
      path: "pages/botswana/:botswanaDetail",
      element: <BotswanaFoodDetails />,
      loader: botswanaLoader,
    },
    {
      path: "/food/order",
      element: <OrderPage />,
    },
    {
      path: "/food/login",
      element: <NewLogin />,
    },
    {
      path: "/food/signUp",
      element: <Signup />,
    },
  ]);
  return (
    <>
      <Provider store={reduxStore}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
