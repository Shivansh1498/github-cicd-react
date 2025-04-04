import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import RootLayout from "./RootLayout";

const routes = createBrowserRouter([
  {
    path: "/github-cicd-react",
    element: <RootLayout />,
    children: [
      { index: true, element: <App /> },
      { path: "about", element: <About /> },
    ],
  },
]);

export default routes;
