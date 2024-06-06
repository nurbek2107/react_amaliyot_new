import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Header";
import Footer from "../components/footer/Footer";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet /> 
      <Footer />
    </>
  );
}

export default MainLayout;
