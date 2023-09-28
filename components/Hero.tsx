import React from "react";
import Image from "next/image";
import catagory from "@/data/catagory";
const Hero = () => {
  return (
    <div className="text-center">
      <div>
        <Image
          src="/bg.png"
          alt="background"
          width={800}
          height={200}
          className="w-full absolute mt-[50px]"
        />
        <div className="mt-[70px]">
          <h2 className="text-[55px] text-red-600 tracking-widest font-semibold">
            DISCOVERY
          </h2>
          <h2 className="text-[20px]">Your Amazing City</h2>
          <div className="mt-5 flex gap-3 z-10 items-center justify-center">
            <input
              type="text"
              placeholder="search anything"
              className="z-10 bg-white p-3 shadow-sm border-[1px] rounded-full w-[36%] outline-red-300"
            />
            <button className="bg-red-600 p-3  shadow-md z-10 cursor-pointer rounded-full  hover:scale-105 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
          <div className="mt-5 flex flex-col justify-center items-center">
            <h2>Or Browse the category</h2>
            <div className="grid grid-cols-3 md:grid-cols-7 w-[50%] justify-center gap-5 mt-3">
              {catagory.map((item, index) => (

                <div key={index}
                  className="border-[1px] w-[60px] p-4 bg-white rounded-full z-10
                    hover:border-red-600 hover:scale-110 cursor-pointer transition-all
                    "
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={30}
                    height={30}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
