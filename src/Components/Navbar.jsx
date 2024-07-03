import React from "react";
import Home from "./Home";

const Navbar = () => {
  return (
    <>
      <nav className="container min-h-screen bg-[url('../public/Image.png')] bg-center bg-cover">
        <div className="w-full h-14 md:flex md:justify-between px-20 items-center">
          <div className="">
            <img
              className="h-[60px] w-[130px] mt-6"
              src="../../public/logo.png"
              alt=""
            />
          </div>
          <ul className="text-white md:flex mt-5 font-semibold hidden gap-10 justify-between">
            <li>Home</li>
            <li>About</li>
            <li>Feature</li>
            <li>Contact</li>
          </ul>
          <div>
            <img className="h-9 w-9" src="../../public/cart.png" alt="" />
          </div>
          {/* <div className="md:hidden">
            <a className="text-4xl" href="#">
              &#8801;
            </a>
          </div> */}
        </div>
       <Home/>
      </nav>
    </>
  );
};

export default Navbar;
