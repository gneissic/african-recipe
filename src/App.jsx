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

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "pages/ghana", element: <GhanaFoodPage /> },
    { path: "pages/nigeria", element: <NigeriaFoodPage /> },
    { path: "pages/zimbabwe", element: <ZimbabweFoodPage /> },
    { path: "pages/botswana", element: <BotswanaFoodPage /> },
    { path: "pages/ethiopia", element: <EthiopiaFoodPage /> },
    { path: "pages/morocco", element: <MoroccoFoodPage /> },
    { path: "pages/tanzania", element: <TanzaniaFoodPage /> },
    { path: "pages/tunisia", element: <TunisiaFoodPage /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
