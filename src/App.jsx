import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import GhanaFoodPage from "./pages/GhanaFoodPage";
import NigeriaFoodPage from "./pages/NigeriaFoodPage";
import ZimbabweFoodPage from "./pages/ZimbabweFoodPage";
import BotswanaFoodPage from "./pages/BotswanaFoodPage";
import EthiopiaFoodPage from "./pages/EthiopiaFoodPage";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "pages/ghana", element: <GhanaFoodPage /> },
    { path: "pages/nigeria", element: <NigeriaFoodPage /> },
    { path: "pages/zimbabwe", element: <ZimbabweFoodPage /> },
    { path: "pages/botswana", element: <BotswanaFoodPage /> },
    { path: "pages/ethiopia", element: <EthiopiaFoodPage /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
