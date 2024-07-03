import React from "react";

const Home = () => {
  return (
    <>
      <main className="h-auto w-full">
        <div className=" md:flex text-center justify-evenly">
          <div className="text-white font-bold mt-48 w-[600px]">
            <h1 className="text-6xl font-semibold mr-10">
              <span className="mr-52"> Groceries</span>
              <br /> delivery in <span className="font-light">15 mins</span>
            </h1>
            <p className="w-[500px] flex justify-start mt-4 font-light ml-10">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At iste
              id aliquam itaque alias commodi molestiae.
            </p>
            <div className="mt-12 w-[300px] flex justify-evenly ">
              <a className="p-3 bg-yellow-400 rounded-full text-black" href="#">
                Order Now
              </a>
              <a className="p-3 bg-white rounded-full text-black" href="#">
                Downlaod App
              </a>
            </div>
          </div>
          <div>
            <img
              className="h-[500px] w-[500px]"
              src="../../public/grocery-image.png"
              alt=""
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
