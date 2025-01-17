import { Outlet } from "react-router-dom";
import Header from "./_component/Header";
import Footer from "./_component/Footer";

export default function HomeTemplate() {
  return (
    <div className="bg-[url('/images/bgmovie.jpg')] bg-cover w-screen h-screen overflow-hidden overflow-y-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
