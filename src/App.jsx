import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import Services from "./page/Services";
import Blogs from "./page/Blogs";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> }, // Yo'l boshidan / belgisini qo'shing
        { path: "/contact", element: <Contact /> }, // Yo'l boshidan / belgisini qo'shing
        { path: "/services", element: <Services /> }, // Yo'l boshidan / belgisini qo'shing
        { path: "/blogs", element: <Blogs /> }, // Yo'l boshidan / belgisini qo'shing
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
